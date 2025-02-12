import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search paintings, photography, sculptures..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {error && <p>{error}</p>}
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item.title} by {item.artist}</li>
          ))}
        </ul>
      </div>
    );
  };

export default SearchBar;
