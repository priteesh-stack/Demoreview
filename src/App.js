import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./assets/css/style.css";
import Navbar from './componnets/Navbar';
import Abouts from './componnets/Abouts';
import Campaigns from './componnets/Campaigns';
import Locate from './componnets/Locate';
import Order from './componnets/Order';
import MainContent from './componnets/MainContent';


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