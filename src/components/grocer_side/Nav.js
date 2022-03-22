import React from "react";
import "../../style/grocer_side/Nav.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <section className="grocer_side-nav">
      <img
        className="grocer_side-nav-logo"
        src={logo}
        alt="small basket logo"
      />
      <div className="grocer_side-nav-div_2">
        <ul>
          <li>About</li>
          <li>Download</li>
          <li>
            <Link to="/">Become a user</Link>
          </li>
          <li>Support</li>
        </ul>
      </div>
    </section>
  );
}
