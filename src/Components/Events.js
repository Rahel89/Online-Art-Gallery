import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from "react";
import event1 from '../images/event1.jpg'
import event2 from '../images/event7.jpg'
import event6 from '../images/event6.jpg'
import event4 from '../images/event4.jpg'

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

  const handleNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

    return (
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Upcoming Events</h2>
            <img src= {images[index]} alt="Upcoming Event" className="img-fluid mt-3" />
            <button className="btn btn-secondary mt-3" onClick={handleNextImage}>
            Next
          </button>
          </div>
          
          <div className="col-md-6">
            <h2>Register for an Event</h2>
            <form className="mt-3">
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-3" style={{ minWidth: "120px" }}>First Name</label>
              <input type="text" className="form-control" placeholder="Enter your first name" />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-3" style={{ minWidth: "120px" }}>Last Name</label>
              <input type="text" className="form-control" placeholder="Enter your last name" />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-3" style={{ minWidth: "120px" }}>Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-3" style={{ minWidth: "120px" }}>Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your phone number" />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-3" style={{ minWidth: "120px" }}>Select Event</label>
              <select className="form-control">
                {events.map((event, index) => (
                  <option key={index} value={event}>{event}</option>
                ))}
              </select>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-3" style={{ minWidth: "120px" }}>Select Date & Time</label>
              <input type="datetime-local" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Events;