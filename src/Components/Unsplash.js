import React, { useState, useEffect } from "react";
import axios from "axios";

const UnsplashGallery = () => {
  const [images, setImages] = useState([]);
  const API_URL = "https://api.unsplash.com/search/photos";
  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            query: "art",
            per_page: 9,
            client_id: ACCESS_KEY,
          },
        });
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div className="grid">
        {images.map((img) => (
          <img key={img.id} src={img.urls.small} alt={img.alt_description} />
        ))}
      </div>
    </div>
  );
};

export default UnsplashGallery;
