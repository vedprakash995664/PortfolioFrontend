import React, { useState } from 'react';
import '../Css/Header.css';
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo"><img src="vedlogo.png" alt="" className='img-fluid' /></div>
          
          <button className="toggle-button" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          
          <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link">About Me</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Project</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div className='btn'> 
          <a href="https://wa.me/916307275065" target="_blank"><img src="whats.jpg" alt="WhatsApp"/></a>
          <a href="https://www.linkedin.com/in/ved-prakash-93436518a/"><img src="link.png" alt=""/></a>
         <a href="https://github.com/vedprakash995664"><img src="github.jpg" alt=""/></a> 
          <div className='modes'><i class="bi bi-brightness-high-fill"></i></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;