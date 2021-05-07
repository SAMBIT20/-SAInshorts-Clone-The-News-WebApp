import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts Clone by -{" "}
        <a
          href="https://www.linkedin.com/in/sambit-kumar-nanda-4ab90817b/"
          target="__blank"
        >
          Sambit Kumar Nanda
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sambit-kumar-nanda-4ab90817b/"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://samnanda.netlify.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
