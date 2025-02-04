import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div>
            <h1>Main Gallery</h1>
            <div>
                <Link to="/gallery/category/painting">Painting</Link>
            </div>
            <div>
                <Link to="/gallery/category/photography">Photography</Link>
            </div>
            <div>
                <Link to="/gallery/category/sculpture">Sculpture</Link>
            </div>
        </div>
    );
}

export default Gallery;