import React from 'react';
import {  Link } from 'react-router-dom';


const Footer = () => {
  return (
    
    <div className="footer-section">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app">Todo App</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
      </ul>
     
    </div>
    
  );
}

export default Footer;