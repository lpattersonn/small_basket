import React from "react";
import logo from "../../images/logo white.svg";
import "../../style/user_side/Nav.css"

export default function Nav(props) {
  return (
    <div className="user_side-nav">
      <div>
        <img className="user_side-nav-logo" src={logo} alt="" />
      </div>
      <nav className="user_side-nav-nav">
        <ul>
          <li>About</li>
          <li>Download</li>
          <li><a className="user_side-nav-button" href="/grocerside">Partner with us</a></li>
          <li>Support</li>
        </ul>
      </nav>
    </div>
  );
}
