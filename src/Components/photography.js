import React from "react";
import { Link } from 'react-router-dom';
import Addis from '../images/Addis.jpg'
import early from '../images/early.jpg'
import shadows from '../images/shadows.jpg'
import faith from '../images/faith.jpg'
import family from '../images/family.jpg'
import fashion from '../images/fashion.jpg'
import father from '../images/father.jpg'
import zion from '../images/zion.jpg'
import vibrance from '../images/vibrance.jpg'

const photos = [
    {
      title: "The early riser",
      artist: "Amanuel Tsegaye",
      price: "60,000",
      image: require('../images/early.jpg')
    },
    {
      title: "Moving Shadows",
      artist: "Girma Berta",
      price: "70,000",
      image: require('../images/shadows.jpg')
    },
    {
      title: "The fashinista",
      artist: "Eyerusalem Jiregna",
      price: "80,000",
      image: require('../images/fashion.jpg')
    },
    {
      title: "Addis",
      artist: "Sehin Tewabe",
      price: "90,000",
      image: require('../images/Addis.jpg')
    },
    {
      title: "The faithful",
      artist: "Helina Abebe",
      price: "50,000",
      image: require('../images/faith.jpg')
    },
    {
      title: "Grand Father",
      artist: "Addis Aemero",
      price: "55,000",
      image: require('../images/father.jpg')
    },
    {
      title: "Zion",
      artist: "Tsion Haileselassie",
      price: "75,000",
      image: require('../images/zion.jpg')
    },
    {
      title: "Family",
      artist: "Martha Tadesse",
      price: "67,000",
      image: require('../images/family.jpg')
    },
    {
      title: "Vibrance",
      artist: "Aida Muluneh",
      price: "77,000",
      image: require('../images/vibrance.jpg')
    }
  ];
  
  const Photography = () => {
    return (
      <div className="container text-center mt-5">
        <h2 className="mb-4">Gallery of Photography</h2>
        <p>Browse through our collections of photography from rising Ethiopian photographers</p>
        <div className="row">
          {photos.map((photo, index) => (
            <div key={index} className="col-md-4 mb-4">
              <figure className="card shadow-lg p-3 bg-light">
                <img src={photo.image} alt={photo.title} className="card-img-top" />
                <figcaption className="card-body">
                  <h5 className="card-title">{photo.title}</h5>
                  <p className="card-text"><strong>Artist:</strong> {photo.artist}</p>
                  <p className="card-text"><strong>Price:</strong> {photo.price}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Photography;
  