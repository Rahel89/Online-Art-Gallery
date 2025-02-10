import React from 'react';
import { Link } from 'react-router-dom';

const sculptures = [
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
      title: "Beauty",
      artist: "Robel Ayalew",
      price: "90,000",
      image: require('../images/beauty.jpg')
    },
    {
      title: "Love",
      artist: "Sisay Teshome",
      price: "50,000",
      image: require('../images/love.jpg')
    },
    {
      title: "The God Father",
      artist: "Birhan Teka",
      price: "55,000",
      image: require('../images/godfather.jpg')
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
  
  const Sculpture = () => {
    return (
      <div className="container text-center mt-5">
        <h2 className="mb-4">Gallery of Sculptures</h2>
        <p>Browse through our collections of sculptures from renowned Ethiopian artists</p>
        <div className="row">
          {sculptures.map((sculpture, index) => (
            <div key={index} className="col-md-4 mb-4">
              <figure className="card shadow-lg p-3 bg-light">
                <img src={sculpture.image} alt={sculpture.title} className="card-img-top" />
                <figcaption className="card-body">
                  <h5 className="card-title">{sculpture.title}</h5>
                  <p className="card-text"><strong>Artist:</strong> {sculpture.artist}</p>
                  <p className="card-text"><strong>Price:</strong> {sculpture.price}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sculpture;
  