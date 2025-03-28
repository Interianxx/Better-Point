import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from "./components/pages/Services.jsx";
import Products from "./components/pages/Products.jsx";
import SignUp from "./components/pages/Cart.jsx";
import NotFound from "./components/pages/NotFound.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<SignUp />} />
                <Route path="/not-found" component={NotFound} />
            </Routes>

        </Router>
    );
}

export default App;
