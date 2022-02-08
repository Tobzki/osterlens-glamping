import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="app__footer_container">
      <a href="https://www.instagram.com/arsenal/">
        <AiOutlineFacebook style={{ fontSize: "27px" }} />
      </a>
      <a href="https://www.instagram.com/arsenal/">
        <AiOutlineInstagram style={{ fontSize: "27px" }} />
      </a>
    </div>
  );
};

export default Footer;
