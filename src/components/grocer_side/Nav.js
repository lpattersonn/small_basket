import React from "react";
import "../../style/grocer_side/Nav.css"
import logo from "../../images/logo.png"

export default function Nav(props) {
  return (
    <section className="grocer_side-nav">
      <div className="grocer_side-nav-div_1">
        <img src={logo} alt="small basket logo"/>
      </div>
      <div className="grocer_side-nav-div_2">
        <ul>
          <li>About</li>
          <li>Download</li>
          <li>Partner with us</li>
          <li>Support</li>
        </ul>
      </div>
    </section>
  );
}
