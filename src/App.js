import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./assets/css/style.css";
import Navbar from './components/Navbar';
import Abouts from './components/Abouts';
import Campaigns from './components/Campaigns';
import Locate from './components/Locate';
import Order from './components/Order';
import MainContent from './components/MainContent';


const App = () => {

 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent/>} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/locate" element={<Locate id='location-pages'/>} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;