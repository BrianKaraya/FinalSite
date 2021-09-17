import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import { Dropdown } from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="header">
        <nav className="header-inner">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <Link to="/" className="brand" onClick={closeMobileMenu}>
            EVENTS
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Join
              </Link>
            </li> */}

            <btn />
            {/* Button class */}

            {/* <span className="cart-svg">
              <Link to="#">
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </span> */}

            <div className="social-icons1">
              <Link
                className="social-icon-link1"
                to="/"
                target="_blank"
                aria-label="facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>

              <Link
                className="social-icon-link1"
                to="/"
                target="_blank"
                aria-label="instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icon-link1"
                to="/"
                target="_blank"
                aria-label="youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link1"
                to="/"
                target="_blank"
                aria-label="twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
            </div>
          </ul>

          <span className="cart-svg">
            <Link to="/basket">
              <i className="fas fa-shopping-cart">0</i>
            </Link>
          </span>
        </nav>

        {/*  <div className="burger">

        --manual hamburger
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="burger-x">
          <div className="line1x"></div>
          <div className="line3x"></div>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
