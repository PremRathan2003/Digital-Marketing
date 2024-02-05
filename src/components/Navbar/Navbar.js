import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className='row'>
      <div className="logo">
        <Link to="/" className="logo-link">Digital Marketing</Link>
      </div>
      <div className="menu-icon" onClick={handleMenuClick}>
        <IoMenuSharp />
      </div>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/blog" className="nav-link">Blogs</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
