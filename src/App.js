// App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/ContactPage';
import About from './components/About';
import NavBar from "./components/NavBar";
import LoginPage from "./components/Login";

function App() {
    return (
        <>
            {/*<NavBar/>*/}
        <Router>

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
        </>
    );
}

export default App;
