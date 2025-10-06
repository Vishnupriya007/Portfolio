import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">PORTFOLIO</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a onClick={() => scrollToSection('about')}>ABOUT ME</a></li>
        <li><a onClick={() => scrollToSection('skills')}>SKILLS</a></li>
        <li><a onClick={() => scrollToSection('portfolio')}>EXPERIENCE</a></li>
        <li><a onClick={() => scrollToSection('project')}>PROJECTS</a></li>
        <li><a onClick={() => scrollToSection('contact')}>CONTACT</a></li>
          
      </ul>
    </nav>
  );
};
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const offset = 100; // Adjust based on your navbar height
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export default Navbar;
