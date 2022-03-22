import React from "react";
import "../../style/grocer_side/Nav.css";
import logo from "../../images/logo.png";

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
            <a href="/">
              Become a user
            </a>
          </li>
          <li>Support</li>
        </ul>
      </div>
    </section>
  );
}
