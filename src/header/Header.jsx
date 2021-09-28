import React from "react";
import "./header.css";
import img8 from "../img/img-8.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">AZAD</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={img8} alt="img" />
    </div>
  );
}

export default Header;
