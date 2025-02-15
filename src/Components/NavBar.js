import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div className="navbar-nav">
        <Link to="/" className="nav-link mx-3">Home</Link>
        <Link to="/submitart" className="nav-link mx-3">Become a member</Link>
        <Link to="/events" className="nav-link mx-3">Events</Link>
        <Link to="/artistpage" className="nav-link mx-3">Our Artists</Link>
        <Link to="/gallery" className="nav-link mx-3">Gallery</Link>
        <Link to="/chicagoart" className="nav-link mx-3">Art Institute of Chicago</Link>
      </div>
    </nav>
  );
};

export default Navbar;