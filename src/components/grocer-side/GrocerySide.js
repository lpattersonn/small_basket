import React from "react";
import "../../style/grocer-side/GrocerySide.css";
import Nav from "../Nav.js";

export default function GrocerySide(props) {
  return (
    <section className="header-div_1">
      <Nav />
      <div className="header-div_2">
        <div className="header-div_3">
          <h1>Are you a small grocer?</h1>
          <p>
            We want to work with small businesses like you to reduce food waste
            and help you reach your customer base more effectively.
          </p>
        </div>
        <button className="button">Partner with us</button>
      </div>
      <div className="header-div_4"></div>
    </section>
  );
}
