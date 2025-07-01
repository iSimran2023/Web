import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import Homepage from '../pages/Homepage';

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing;