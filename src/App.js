import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Events from './Components/Events';



function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/events" element={<Events/>} />
      </Routes>
    </Router>
  );
}

export default App;
