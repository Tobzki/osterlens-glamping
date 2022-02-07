import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar_header">
        <h1 className="navbar__peppins">Österlens Glamping</h1>
      </div>
      <ul className="app__navbar_links">
        <li className="p__cormorant">
          <a href="">Hem</a>
        </li>
        <li className="p__cormorant">
          <a href="">Bilder</a>
        </li>
        <li className="p__cormorant">
          <a href="">Priser & Bokning</a>
        </li>
        <li className="p__cormorant">
          <a href="">Q&A</a>
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
                <a>Hem</a>
              </li>
              <li className="p__cormorant">
                <a>Bilder</a>
              </li>
              <li className="p__cormorant">
                <a>Priser & Bokning</a>
              </li>
              <li className="p__cormorant">
                <a>Q&A</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
