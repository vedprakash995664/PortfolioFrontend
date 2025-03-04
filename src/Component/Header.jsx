import React, { useState, useEffect } from 'react';
import '../Css/Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Toggle Theme Mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Use effect to load the theme from localStorage (if set)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-theme');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <header className={`${isDarkMode ? 'headL' : 'header'}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="vedlogo.png" alt="" className="img-fluid" />
          </div>

          <button className="toggle-button" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`navbar ${isNavOpen ? 'active' : ''} ${isDarkMode ? 'dark-mode-navbar' : ''}`}>

            <ul className="nav-menu">
              <li className="nav-item"><a href="#nav-section"  className={`${isDarkMode ? 'navlinkdark' : 'nav-link'}`}>Home</a></li>
              <li className="nav-item"><a href="#about-section"  className={`${isDarkMode ? 'navlinkdark' : 'nav-link'}`}>About Me</a></li>
              <li className="nav-item"><a href="#services-section"  className={`${isDarkMode ? 'navlinkdark' : 'nav-link'}`}>Services</a></li>
              <li className="nav-item"><a href="#project-section"  className={`${isDarkMode ? 'navlinkdark' : 'nav-link'}`}>Project</a></li>
              <li className="nav-item"><a href="#contact-section" className={`${isDarkMode ? 'navlinkdark' : 'nav-link'}`}>Contact</a></li>
            </ul>
          </nav>
          <div className="modes" onClick={toggleTheme}>
              <i className={`bi ${isDarkMode ? 'bi-moon-fill' : 'bi-sun-fill'}`}></i>
            </div>
          <div className="btn">
            <a href="https://wa.me/916307275065" target="_blank" rel="noopener noreferrer">
              <img src="whats.jpg" alt="WhatsApp"/>
            </a>
            <a href="https://www.linkedin.com/in/ved-prakash-93436518a/">
              <img src="link.png" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/vedprakash995664">
              <img src="github.jpg" alt="GitHub"/>
            </a>
           
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
