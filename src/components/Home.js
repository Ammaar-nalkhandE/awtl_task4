// HomePage.js

import React from 'react';
import './HomePage.css';
import NavBar from "./NavBar";

const HomePage = () => {
    return (
        <>
            <NavBar/>
        <div className="home-page">
            <div className="hero-section">
                <h1>Welcome to Student App</h1>
                <p>Manage your academic life with ease.</p>
                <a href="https://www.vupune.ac.in/" className="btn">Get Started</a>
            </div>
        </div>
        </>

    );
}

export default HomePage;
