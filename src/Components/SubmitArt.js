import React from 'react';
import { Link } from 'react-router-dom';

const SubmitArt = () => {
  return (
    <div className="container text-center mt-5">
      <h2>Submit Your Artwork</h2>
      <form className="mt-4">
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Title</label>
          <input type="text" className="form-control" placeholder="Enter artwork title" />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Price</label>
          <input type="number" className="form-control" placeholder="Enter price" />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Description</label>
          <textarea className="form-control" placeholder="Describe your artwork" rows="3"></textarea>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Category</label>
          <select className="form-control">
            <option>Painting</option>
            <option>Photography</option>
            <option>Sculpture</option>
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Upload Image</label>
          <input type="file" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit Artwork</button>
      </form>
    </div>
  );
};

export default SubmitArt;
