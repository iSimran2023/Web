import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import Homepage from '../pages/Homepage';
import Contactus from '../pages/Contactus';
import Footer from '../components/Footer';

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contactus/>} />
            <Route path="/footer" element={<Footer/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing;