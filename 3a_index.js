import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

//Home.js
import React from "react";
function Home() {
    return (
        <div className="container">
            <h1>Welcome to My React App</h1>
            <p>
                This is the Home Page. Explore React basics!
            </p>
        </div>
    );
}

export default Home;

//about.js
import React from "react";
function About() {
    return (
        <div className="container">
            <h1>Welcome to About Page</h1>
            <p>
                This is the About Page. Explore React basics!
            </p>
        </div>
    );
}

export default About;

//contact.js
import React from "react";

function Contact() {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <p>Email: myemail@mydomain.com</p>
            <p>Mobile: 9191919191</p>
            <p>You can contact us from any of above options</p>
        </div>
    );
}

export default Contact;
//app.js
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
