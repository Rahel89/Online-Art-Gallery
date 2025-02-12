require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db'); 
const cors = require("cors");

app.use(cors());
app.use(express.json());


const paintings = [
  { id: 1, title: "VENDORS", artist: "Mahlet Gebre" },
  { id: 2, title: "Morning", artist: "Daniel Sisay" },
];

const photos = [
  { id: 1, title: "The early riser", artist: "Amanuel Tsegaye" },
  { id: 2, title: "Moving Shadows", artist: "Girma Berta" },
];

const sculptures = [
  { id: 1, title: "Beauty", artist: "Robel Ayalew" },
  { id: 2, title: "Love", artist: "Sisay Teshome" },
];

// Search endpoint
app.get("/search", (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = [
    ...paintings.filter((p) => p.title.toLowerCase().includes(query) || p.artist.toLowerCase().includes(query)),
    ...photos.filter((p) => p.title.toLowerCase().includes(query) || p.artist.toLowerCase().includes(query)),
    ...sculptures.filter((p) => p.title.toLowerCase().includes(query) || p.artist.toLowerCase().includes(query)),
  ];
  res.json(results);
});

// to fetch artist from database
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

  try {
    const result = await pool.query(
      'UPDATE artists SET Fname = $1, Lname = $2, email = $3, phone_number = $4 WHERE artist_id = $5',
      [Fname, Lname, email, phone_number, artistId]
    );

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




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});