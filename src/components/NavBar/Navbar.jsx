import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "../../App.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar_header">
        <h1 className="navbar__peppins">Österlens Glamping</h1>
      </div>
      <ul className="app__navbar_links">
        <li className="p__cormorant">
          <Link className="navbar__menu_text" to="/">
            Hem
          </Link>
        </li>
        <li className="p__cormorant">
          <Link className="navbar__menu_text" to="/images">
            Bilder
          </Link>
        </li>
        <li className="p__cormorant">
          <Link className="navbar__menu_text" to="/booking">
            Priser & Bokning
          </Link>
        </li>
        <li className="p__cormorant">
          <Link className="navbar__menu_text" to="/questions">
            Q&A
          </Link>
        </li>
      </ul>
      <div className="app__navbar_smallscreen">
        <GiHamburgerMenu
          color="white"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar_smallscreen_overlay flex__center slide_bottom">
            <ul className="app__navbar_smallscreen_links">
              <AiFillCloseCircle
                color="white"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
                className="overlay__close"
              />
              <li className="p__cormorant">
                <Link className="navbar__menu_text" to="/">
                  Hem
                </Link>
              </li>
              <li className="p__cormorant">
                <Link className="navbar__menu_text" to="/images">
                  Bilder
                </Link>
              </li>
              <li className="p__cormorant">
                <Link className="navbar__menu_text" to="/booking">
                  Priser & Bokning
                </Link>
              </li>
              <li className="p__cormorant">
                <Link className="navbar__menu_text" to="/questions">
                  Q&A
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
