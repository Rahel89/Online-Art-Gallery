import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArtistPage = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      console.log('Fetching artists...');
      const response = await axios.get('http://localhost:3000/artists'); // Adjust the URL if needed
         console.log('Artists fetched:', response.data);
      setArtists(response.data);
    } catch (err) {
      console.error('Error fetching artists:', err);
      setError('Failed to fetch artists.');
    }
  };

  const handleEdit = (artist) => {
    // Logic to open an edit modal or redirect to an edit page could be added here
    console.log('Edit artist:', artist);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/artists/${id}`);
      fetchArtists();
    } catch (err) {
      console.error('Error deleting artist:', err);
      setError('Failed to delete artist.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Our Artists</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {artists.map(artist => (
          <div className="col-md-4 " key={artist.artist_id}>
            <div className="card mb-4 card shadow-lg p-3 bg-light">
              <div className="card-body">
                <h5 className="card-title">{artist.fname} {artist.lname}</h5>
                <p className="card-text">Email: {artist.email}</p>
                <p className="card-text">Phone: {artist.phone_number}</p>
                <button className="btn btn-primary" onClick={() => handleEdit(artist)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(artist.artist_id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;

