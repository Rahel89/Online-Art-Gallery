import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./NavBar";

const ChicagoArt = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get("https://api.artic.edu/api/v1/artworks?limit=12");
        console.log("API Response:", response.data); // Debugging log
        if (response.data && response.data.data) {
          setArtworks(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">The Art Institute of Chicago</h2>
        <h6 className="text-center mb-4">Browse through some of the artworks we have availabe in collaboration with 
        The Art Institute of Chicago</h6>

        {loading ? (
          <p className="text-center">Loading artworks...</p>
        ) : (
          <div className="row">
            {artworks.map((art) => (
              <div key={art.id} className="col-md-4 mb-4">
                <div className="card shadow-lg p-3 bg-light">
                  {art.image_id ? (
                    <img
                      src={`https://www.artic.edu/iiif/2/${art.image_id}/full/300,/0/default.jpg`}
                      alt={art.title}
                      className="card-img-top"
                    />
                  ) : (
                    <div className="text-center p-3">No image available</div>
                  )}
                  <div className="card-body text-center">
                    <h5 className="card-title">{art.title || "Untitled"}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChicagoArt;