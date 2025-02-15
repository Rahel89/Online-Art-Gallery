require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db'); 
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());

const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY; //in .env file
const ART_INSTITUTE_API = "https://api.artic.edu/api/v1/artworks";

// unsplash api endpoint
app.get("/api/images", async (req, res) => {
  try {
    const response = await axios.get(`${UNSPLASH_API_URL}?query=art&per_page=9`, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` }
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
});


// chicago api

app.get("/api/artworks", async (req, res) => {
  try {
    const { data } = await axios.get(`${ART_INSTITUTE_API}?limit=10`);
    res.json(data);
  } catch (error) {
    console.error("Error fetching artworks:", error);
    res.status(500).json({ error: "Failed to fetch artworks" });
  }
});


// Fetch artists with optional search query for searching
app.get('/artists', async (req, res) => {
  const searchQuery = req.query.search || ''; // Get the search query from the URL

  try {
    const result = await pool.query(
      `SELECT * FROM artists
       WHERE Fname ILIKE $1 OR Lname ILIKE $1`,
      [`%${searchQuery}%`] // Use parameterized queries to prevent SQL injection
    );

    // Send a 200 OK response with the retrieved artists
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching artists:', err);
    res.status(500).json({ error: 'Failed to fetch artists.' });
  }
});

// to fetch artist from database to be displayed on artist page
app.get('/artists', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM artists'); // Adjust query as needed
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching artists:', err);
    res.status(500).send('Server error');
  }
});

// Artist signup endpoint
app.post('/signup', async (req, res) => {
  const { Fname, Lname, email, phone_number } = req.body;

  // Basic validation
  if (!Fname || !Lname || !email || !phone_number) {
    return res.status(400).json({ error: 'First name, last name, email, and phone number are required.' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO artists (Fname, Lname, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING artist_id',
      [Fname, Lname, email, phone_number]
    );

    const artistId = result.rows[0].artist_id;
    res.status(201).json({ message: 'Artist created successfully!', artistId });
  } catch (error) {
    if (error.code === '23505') {
      // Unique violation
      return res.status(409).json({ error: 'Email already exists.' });
    }
    console.error('Error inserting artist:', error);
    res.status(500).json({ error: 'An error occurred while creating the artist.' });
  }
});

// Update artist endpoint (PUT)
app.put('/artists/:id', async (req, res) => {
  const artistId = parseInt(req.params.id);
  const { Fname, Lname, email, phone_number } = req.body;

  // Basic validation
  if (!Fname || !Lname || !email) {
    return res.status(400).json({ error: 'First name, last name, and email are required.' });
  }

  // Log the values being used for the update
  console.log('Updating artist with values:', {
    Fname,
    Lname,
    email,
    phone_number,
    artistId
  });

  try {
    const result = await pool.query(
      'UPDATE artists SET Fname = $1, Lname = $2, email = $3, phone_number = $4 WHERE artist_id = $5',
      [Fname, Lname, email, phone_number, artistId]
    );

    console.log('Update result:', result); // Log the result of the update
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Artist not found.' });
    }
    
    res.status(200).json({ message: 'Artist updated successfully!' });
  } catch (error) {
    console.error('Error updating artist:', error);
    res.status(500).json({ error: 'An error occurred while updating the artist.' });
  }
});

// Delete artist endpoint (DELETE)
app.delete('/artists/:id', async (req, res) => {
  const artistId = parseInt(req.params.id);

  try {
    const result = await pool.query(
      'DELETE FROM artists WHERE artist_id = $1',
      [artistId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Artist not found.' });
    }

    res.status(200).json({ message: 'Artist deleted successfully!' });
  } catch (error) {
    console.error('Error deleting artist:', error);
    res.status(500).json({ error: 'An error occurred while deleting the artist.' });
  }
});

// endpoint for user registration for an event 
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, selectedEvent } = req.body;

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Check if the user already exists
    const userQuery = `
      INSERT INTO users (fname, lname, email, phone_number)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email) DO UPDATE SET
      fname = EXCLUDED.fname,
      lname = EXCLUDED.lname,
      phone_number = EXCLUDED.phone_number
      RETURNING user_id;
    `;
    const userResult = await client.query(userQuery, [firstName, lastName, email, phoneNumber]);
    const userId = userResult.rows[0].user_id;

    // Get the event ID
    const eventQuery = `
      SELECT event_id FROM events WHERE name = $1;
    `;
    const eventResult = await client.query(eventQuery, [selectedEvent]);
    const eventId = eventResult.rows[0].event_id;

    // Insert the signup into event_Signups
    const signupQuery = `
      INSERT INTO event_Signups (user_id, event_id)
      VALUES ($1, $2)
      ON CONFLICT (user_id, event_id) DO NOTHING; -- Prevent duplicate signups
    `;
    await client.query(signupQuery, [userId, eventId]);

    await client.query('COMMIT');
    
    // Check if this was a new registration or an update
    const isNewUser = userResult.rowCount === 1; // If rowCount is 1, it means the user was newly inserted
    const responseMessage = isNewUser ? 'Registration successful!' : 'User already registered, event signup updated.';

    res.status(isNewUser ? 201 : 200).json({ message: responseMessage });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error registering for event:', err);
    res.status(500).json({ error: 'Failed to register for the event.' });
  } finally {
    client.release();
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});