import React from "react";
import UnsplashGallery from "./Unsplash";
import Navbar from "./NavBar";


const Gallery = () => {
    return (
      <div>
      <Navbar/>
        <h1>Digital art coming soon</h1>
        <UnsplashGallery />
      </div>
    );
  };
  
  export default Gallery;