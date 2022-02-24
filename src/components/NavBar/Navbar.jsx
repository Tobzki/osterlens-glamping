import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar_header">
        <h1 className="navbar__peppins">Österlens Glamping</h1>
      </div>
      <ul className="app__navbar_links">
        <li className="p__cormorant">
          <Link to="/">Hem</Link>
        </li>
        <li className="p__cormorant">
          <Link to="/images">Bilder</Link>
        </li>
        <li className="p__cormorant">
          <Link to="/booking">Priser & Bokning</Link>
        </li>
        <li className="p__cormorant">
          <Link to="/questions">Q&A</Link>
        </li>
      </ul>
      <div className="app__navbar_smallscreen">
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar_smallscreen_overlay flex__center slide_bottom">
            <AiFillCloseCircle
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar_smallscreen_links">
              <li className="p__cormorant">
                <Link to="/">Hem</Link>
              </li>
              <li className="p__cormorant">
                <Link to="/images">Bilder</Link>
              </li>
              <li className="p__cormorant">
                <Link to="/booking">Priser & Bokning</Link>
              </li>
              <li className="p__cormorant">
                <Link to="/questions">Q&A</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
