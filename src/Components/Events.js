import React from 'react';
import  { useState } from "react";
import Navbar from './NavBar';
import axios from 'axios';


const images = [
  require("../images/event1.jpg"),
  require("../images/event7.jpg"),
  require("../images/event6.jpg"),
  require("../images/event4.jpg"),
];

const events = [
    "Art Exhibition",
    "Photography Workshop",
    "Sculpture Showcase",
    "Painting Masterclass"
  ];


const Events = () => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedEvent: '',
    dateTime: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
    if (!formData.selectedEvent) newErrors.selectedEvent = 'Please select an event.';
    if (!formData.dateTime) newErrors.dateTime = 'Please select a date and time.';

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage(''); 
    } else {
      console.log('Form submitted successfully!', formData);
      
      try {
        const response = await axios.post('http://localhost:3000/register', formData);
        console.log(response.data.message); // Confirmation message
        setSuccessMessage('Registration successful!'); 
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          selectedEvent: '',
          dateTime: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error during registration:', error);
        setErrors({ submission: 'Failed to register for the event.' });
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
      <Navbar />
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Upcoming Events</h2>
            <img src={images[index]} alt="Upcoming Event" className="img-fluid mt-3" />
            <button className="btn btn-secondary mt-3" onClick={handleNextImage}>
              Next
            </button>
          </div>

          <div className="col-md-6">
            <h2>Register for an Event</h2>
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            <form className="mt-3" onSubmit={handleSubmit}>
              {/* Form Fields */}
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
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && <span className="error text-danger">{errors.phoneNumber}</span>}
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label className="form-label me-3" style={{ minWidth: "120px" }}>Select Event</label>
                <select
                  name="selectedEvent"
                  value={formData.selectedEvent}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select an event</option>
                  {events.map((event, index) => (
                    <option key={index} value={event}>{event}</option>
                  ))}
                </select>
                {errors.selectedEvent && <span className="error text-danger">{errors.selectedEvent}</span>}
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label className="form-label me-3" style={{ minWidth: "120px" }}>Select Date & Time</label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.dateTime && <span className="error text-danger">{errors.dateTime}</span>}
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;