import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNavOnItemClick = () => {
    // Close the navigation bar on small screens when a link is clicked
    if (window.innerWidth <= 992) {
      setIsNavOpen(false);
    }
  };

  return (
    <nav className={`navbar nav-crev navbar-expand-lg  bg-Nav-box ${isNavOpen ? "nav-open" : ""}`}>
      <div className="container">
        {/* logo */}
        <Link className="logo icon-img-100" to="/" onClick={closeNavOnItemClick}>
          <p style={{ fontSize: "20px", fontWeight: "600" }}>IG Tech</p>
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="icon-bar">
            <IoMdMenu />
          </span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link hover-this hover-anim"
                to={"/"}
                onClick={closeNavOnItemClick}
              >
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to={"/portfolio"}
                onClick={closeNavOnItemClick}
              >
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to={"/service"}
                onClick={closeNavOnItemClick}
              >
                <span className="rolling-text">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/Hire"}
                onClick={closeNavOnItemClick}
              >
                <span className="rolling-text">Hire</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to={"/about"}
                onClick={closeNavOnItemClick}
              >
                <span className="rolling-text">About us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/contact"}
                onClick={closeNavOnItemClick}
              >
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button>
              <span className="pe-7s-search" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
