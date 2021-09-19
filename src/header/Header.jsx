import React from "react";
import "./header.css";
import img6 from "../img/img-6.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="HeaderImg" src={img6} alt="img" />
    </div>
  );
}

export default Header;
