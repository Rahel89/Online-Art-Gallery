import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../animation.css';
import Navbar from './NavBar';


const categories = [
    {
      title: "Painting",
      image: require("../images/painting.jpg"),
      link: "/painting",
    },
    {
      title: "Photography",
      image: require("../images/photo.jpg"),
      link: "/photography",
    },
    {
      title: "Sculpture",
      image: require("../images/sculpt.jpg"),
      link: "/sculpture",
    }
  ];

const Home = () => {
    return (
        <div>
           <Navbar/>

            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <h1 className="pulse text-center mb-4">Welcome to Our Art Gallery</h1>
                        <p className="text-center mb-4">Presenting up and coming and renowned Ethiopian creatives </p>
                    </div>
                  
                </div>
            </div>

            <div className="container my-5">
      <h2 className="text-center mb-4">Explore Our Categories</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-lg">
              <img src={category.image} className="card-img-top" alt={category.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{category.title}</h5>
                <a href={category.link} className="btn btn-primary"> Browse more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


            <div className="container bg-light py-4 my-4">
                <h2>About Us</h2>
                <p>Welcome to our online gallery showcasing the rich artistic heritage of Ethiopia. We are dedicated to promoting Ethiopian artists, photographers, and sculptors, providing a  platform for their remarkable work to be admired.

Our goal is to celebrate the diverse cultural expressions and creativity of Ethiopian talent. We curate a collection of artworks that encapsulate the essence of Ethiopian artistry, offering a glimpse into the beauty of Ethiopian art.

Through our platform, we connect art enthusiasts, collectors, and admirers with the vibrant creations of Ethiopian artists. We strive to foster a deeper appreciation for the cultural richness and artistic brilliance that Ethiopia has to offer.

Explore our gallery to discover a captivating array of paintings, photographs, and sculptures.</p>
                <h5>Follow Us on Social Media</h5>
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