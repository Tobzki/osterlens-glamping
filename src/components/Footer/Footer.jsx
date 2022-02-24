import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="app__footer_container">
        <div className="app__footer_text">
          <h1 className="headtext__peppins">Österlens Glamping</h1>
          <p className="p__cormorant">Ullstorp 1023</p>
          <p className="p__cormorant">273 94 Tomelilla</p>
          <p className="p__cormorant">Sverige</p>
        </div>
      </div>
      <div className="app__footer_icons">
        <a href="https://www.instagram.com/arsenal/">
          <AiOutlineFacebook style={{ fontSize: "27px" }} />
        </a>
        <a href="https://www.instagram.com/arsenal/">
          <AiOutlineInstagram style={{ fontSize: "27px" }} />
        </a>
      </div>
    </>
  );
};

export default Footer;
