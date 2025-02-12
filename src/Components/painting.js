import React from 'react';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import vendors from '../images/vendors.jpg'
import morning from '../images/morning.jpg'
import lalibela from '../images/lalibela.jpg'
import flower from '../images/flower.jpg'
import reality from '../images/reality.jpg'
import Ethiopia from '../images/Ethiopia.jpg'


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
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query) {
          const response = await axios.get(`http://localhost:3000/search?q=${query}`);
          setResults(response.data);
          setError(null); // Clear any previous errors
        } else {
          setResults([]);
        }
      } catch (err) {
        setError("Error fetching data"); // Set error message
        setResults([]); // Clear results on error
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        results={results} 
        error={error} 
        setError={setError} 
      />
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