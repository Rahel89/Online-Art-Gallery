import React from 'react';
import { Link } from 'react-router-dom';
import sc2 from '../images/sc2.jpg'
import sc5 from '../images/sc5.jpg'
import sc6 from '../images/sc6.jpg'
import sc7 from '../images/sc7.jpg'
import sc8 from '../images/sc8.jpg'
import sc9 from '../images/sc9.jpg'


const sculptures = [
    {
      title: "Head",
      artist: "Dawit Senay",
      price: "70,000",
      image: require('../images/sc2.jpg')
    },
   
    {
      title: "Model",
      artist: "Surafel Adane",
      price: "50,000",
      image: require('../images/sc5.jpg')
    },
    {
      title: "Figurine",
      artist: "Biruk Terefe",
      price: "55,000",
      image: require('../images/sc9.jpg')
    },
    {
      title: "Bust",
      artist: "Leul Habte",
      price: "75,000",
      image: require('../images/sc6.jpg')
    },
    {
      title: "Lady",
      artist: "Tesfu Gashaw",
      price: "67,000",
      image: require('../images/sc7.jpg')
    },
    {
      title: "King",
      artist: "Yafet Mengesha",
      price: "77,000",
      image: require('../images/sc8.jpg')
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
  