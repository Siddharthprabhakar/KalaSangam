import { useState } from 'react';
import "./sellnavbar.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

export function SellNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sellnavbar">
      <div className="sellnav">
        <div className="selllogo">
          कलाSangam
        </div>
        <div className="hamburger" onClick={handleToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`sellnav-links ${isOpen ? 'open' : ''}`} style={{ marginBottom: "-0.5rem"}}>
          <li><a href="/" style={{ color: "white" }}>Home</a></li>
          <li><a href="#" style={{ color: "white" }}>Stats</a></li>
          <li><a href="/sell-product-form" style={{ color: "white" }}>Product Form</a></li>
          <li><a href="/sell-profile" style={{ color: "white" }}>Profile</a></li>
          <li><HashLink to='/aboutus#contact' style={{ color: "white" }}>Contact Us</HashLink></li> {/* Updated Link */}
        </ul>
      </div>
    </div>
  );
}
