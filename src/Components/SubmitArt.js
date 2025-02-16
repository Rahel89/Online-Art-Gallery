import React from 'react';
import  { useState } from "react";
import axios from 'axios';
import Navbar from './NavBar';

const ArtistSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    bio: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(''); 
    } else {
      try {
        const artistData = {
          Fname: formData.firstName,
          Lname: formData.lastName,
          email: formData.email,
          phone_number: formData.phone
        };
        //  API endpoint
        await axios.post(`${process.env.REACT_APP_API_URL}/signup`, artistData);
        console.log('Form submitted successfully!', artistData);

        setSuccessMessage('Successfully registered!');
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          title: '',
          bio: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submit: 'Failed to submit the form. Please try again.' });
        setSuccessMessage('');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({ ...errors, [name]: '' }); 
  };

  return (
    <div>
    <Navbar/>
    <div className="container text-center mt-5">
      <h2>Become a member</h2>
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
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
          />
          {errors.email && <span className="error text-danger">{errors.email}</span>}
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-3" style={{ minWidth: "120px" }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error text-danger">{errors.phone}</span>}
        </div>
        {errors.submit && <span className="error text-danger">{errors.submit}</span>}
        {successMessage && <span className="success text-success">{successMessage}</span>} 
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  </div>
  );
};

export default ArtistSignup;