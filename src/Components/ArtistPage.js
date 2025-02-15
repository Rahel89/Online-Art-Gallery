import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditArtistModal from './EditArtistModal';
import Navbar from './NavBar';

const ArtistPage = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async (query = '') => {
    try {
      const response = await axios.get(`http://localhost:3000/artists?search=${query}`);
      console.log('Fetched artists:', response.data);
      setArtists(response.data);
    } catch (err) {
      console.error('Error fetching artists:', err);
      setError('Failed to fetch artists.');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchArtists(searchQuery); // Fetch artists based on search query
  };

  const handleEdit = (artist) => {
    setSelectedArtist(artist);
    setShowModal(true);
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

  const handleClose = () => {
    setShowModal(false);
    setSelectedArtist(null);
  };

  const handleSave = async (artistToUpdate) => {
    console.log('Attempting to save with artist data:', artistToUpdate);
    
    const updatedArtist = {
      Fname: artistToUpdate.Fname,
      Lname: artistToUpdate.Lname,
      email: artistToUpdate.email,
      phone_number: artistToUpdate.phone_number,
      artist_id: artistToUpdate.artist_id
    };

    console.log('Updated artist data:', updatedArtist);

    try {
      await axios.put(`http://localhost:3000/artists/${updatedArtist.artist_id}`, updatedArtist);
      await fetchArtists(); // Refresh the list
      handleClose(); // Close the modal
    } catch (err) {
      console.error('Error updating artist:', err);
      setError('Failed to update artist.');
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="container mt-5">
      <h2>Our Artists</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      
      {/* Search Input */}
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <input 
          type="text" 
          placeholder="Search by first or last name" 
          value={searchQuery} 
          onChange={handleSearchChange} 
          className="form-control" 
        />
        <button type="submit" className="btn btn-primary mt-2">Search</button>
      </form>

      <div className="row mt-4">
        {artists.map(artist => (
          <div className="col-md-4" key={artist.artist_id}>
            <div className="card mb-4">
              <div className="card-body shadow-lg p-3 bg-light">
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
      <EditArtistModal 
        showModal={showModal} 
        artist={selectedArtist} 
        onClose={handleClose} 
        onSave={handleSave} 
      />
    </div>
  </div>
  );
};

export default ArtistPage;