import React from "react";
import logo from "../../images/logo_white.svg";
import "../../style/user_side/Nav.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="user_side-nav">
      <img className="user_side-nav-logo" src={logo} alt="" />
      <ul>
        <li>About</li>
        <li>Download</li>
        <li>
        <Link className="user_side-nav-button" to="/grocerside">Partner with us</Link>
        </li>
        <li>Support</li>
      </ul>
    </div>
  );
}
