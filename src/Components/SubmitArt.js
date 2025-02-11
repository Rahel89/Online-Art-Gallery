import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from "react";

const SubmitArt = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    price: '',
    category: 'Painting',
    image: null
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required.';
    if (!formData.title) newErrors.title = 'Artwork Title is required.';
    if (!formData.price) {
      newErrors.price = 'Price is required.';
    } else if (formData.price <= 0) {
      newErrors.price = 'Price must be a positive number.';
    }
    if (!formData.image) newErrors.image = 'Image upload is required.';

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully!', formData);
      // form submission to server
      setFormData({
        firstName: '',
        lastName: '',
        title: '',
        price: '',
        category: 'Painting',
        image: null
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({ ...errors, [name]: '' }); // Clears the error for the current field
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0] // to store the uploaded file
    });
    setErrors({ ...errors, image: '' }); 
  };

  return (
    <div className="container text-center mt-5">
      <h2>Submit Your Artwork</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="error text-danger">{errors.firstName}</span>}
        </div>
        
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="error text-danger">{errors.lastName}</span>}
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter artwork title"
          />
          {errors.title && <span className="error text-danger">{errors.title}</span>}
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter price"
          />
          {errors.price && <span className="error text-danger">{errors.price}</span>}
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Painting">Painting</option>
            <option value="Photography">Photography</option>
            <option value="Sculpture">Sculpture</option>
          </select>
          {errors.category && <span className="error text-danger">{errors.category}</span>} 
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
          {errors.image && <span className="error text-danger">{errors.image}</span>}
        </div>

        <button type="submit" className="btn btn-primary">Submit Artwork</button>
      </form>
    </div>
  );
};

export default SubmitArt;
