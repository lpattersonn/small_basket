import React from "react";
import "../../style/grocery_side/Header.css"

export default function Header(props) {
  return (
    <section className="grocery_side-header-div_1">
      <div className="grocery_side-header-div_2">
        <div className="grocery_side-header-div_3">
          <h1>Are you a small grocery?</h1>
          <p>
            We want to work with small businesses like you to reduce food waste
            and help you reach your customer base more effectively.
          </p>
        </div>
        <button className="grocery_side-header-button">Partner with us</button>
      </div>
      <div className="grocery_side-header-div_4"></div>
    </section>
  )
}