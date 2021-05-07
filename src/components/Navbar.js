import React from "react";
import "./Navbar.css";
import HumbergerMenu from "./Hamburgermenu";
const Navbar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HumbergerMenu setCategory={setCategory} />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="Logo"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Navbar;
