import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Products from './components/Products'
import Addtocart from './components/Addtocart'
import Favorites from './components/Favorites'
import Login from './components/Login'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
