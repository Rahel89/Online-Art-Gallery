import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <a className="navbar-brand" href="#">Logo</a>
                <div className="navbar-nav">
                    <Link to="/gallery" className="nav-link mx-3">Main Gallery</Link>
                    <a className="nav-link mx-3" href="#">Submit Artwork</a>
                    <a className="nav-link mx-3" href="#">Events</a>
                </div>
            </nav>

            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <h1>Welcome to Our Art Gallery</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col">
                        <img src="image.jpg" className="img-fluid" alt="Image" />
                    </div>
                </div>
            </div>

            <div className="container bg-light py-4 my-4">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Follow Us on Social Media</h3>
                <a href="#" className="btn btn-primary mx-2"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="btn btn-primary mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="btn btn-primary mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>

            <footer className="bg-light text-dark text-center py-3">
                <p>&copy; 2025 Art Gallery. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;