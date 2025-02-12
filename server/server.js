require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db'); 
const cors = require("cors");

app.use(cors());
app.use(express.json());


const events = [
  {
    event_id: 1,
    name: "Art Exhibition",
    image_url: "/images/event1.jpg",
  },
  {
    event_id: 2,
    name: "Photography Workshop",
    image_url: "/images/event7.jpg",
  },
  {
    event_id: 3,
    name: "Sculpture Showcase",
    image_url: "/images/event6.jpg",
  },
  {
    event_id: 4,
    name: "Painting Masterclass",
    image_url: "/images/event4.jpg",
  },
];

app.get("/events", (req, res) => {
  res.json(events);
});




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});