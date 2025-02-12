import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Events from './Components/Events';
import SubmitArt from './Components/SubmitArt';
import Painting from './Components/painting';
import Photography from './Components/photography';




function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/events" element={<Events/>} />
         <Route path="/submitart" element={<SubmitArt/>} />
         <Route path="/painting" element={<Painting/>} />
         <Route path="/photography" element={<Photography/>} />
      </Routes>
    </Router>
  );
}

export default App;
