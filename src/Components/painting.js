import React from 'react';
import Navbar from './NavBar';


const paintings = [
  {
    title: "VENDORS",
    artist: "Mahlet Gebre",
    price: "60,000",
    image: require('../images/vendors.jpg')
  },
  {
    title: "Morning",
    artist: "Daniel Sisay",
    price: "70,000",
    image: require('../images/morning.jpg')
  },
  {
    title: "Lalibela",
    artist: "Ermyas Sine",
    price: "80,000",
    image: require('../images/lalibela.jpg')
  },
  {
    title: "The Flower",
    artist: "Ras Habte",
    price: "75,000",
    image: require('../images/flower.jpg')
  },
  {
    title: "Ethiopia",
    artist: "Tesfaye Gashe",
    price: "67,000",
    image: require('../images/Ethiopia.jpg')
  },
  {
    title: "Reality",
    artist: "Yonas Million",
    price: "77,000",
    image: require('../images/reality.jpg')
  }
];

const Painting = () => {
  return (
    <div>
    <Navbar/>
    <div className="container text-center mt-5">
      <h2 className="mb-4">Gallery of Paintings</h2>
      <p>Browse through our collections of paintings from renowned Ethiopian artists</p>
      <div className="row">
        {paintings.map((painting, index) => (
          <div key={index} className="col-md-4 mb-4">
            <figure className="card shadow-lg p-3 bg-light">
              <img src={painting.image} alt={painting.title} className="card-img-top" />
              <figcaption className="card-body">
                <h5 className="card-title">{painting.title}</h5>
                <p className="card-text"><strong>Artist:</strong> {painting.artist}</p>
                <p className="card-text"><strong>Price:</strong> {painting.price}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Painting;