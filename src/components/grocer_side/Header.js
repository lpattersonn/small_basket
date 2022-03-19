import React from "react";
import "../../style/grocer_side/Header.css"

export default function Header(props) {
  return (
    <section className="grocer_side-header-div_1">
      <div className="grocer_side-header-div_2">
        <div className="grocer_side-header-div_3">
          <h1>Are you a small grocer?</h1>
          <p>
            We want to work with small businesses like you to reduce food waste
            and help you reach your customer base more effectively.
          </p>
        </div>
        <button className="grocer_side-header-button">Partner with us</button>
      </div>
      <div className="grocer_side-header-div_4"></div>
    </section>
  )
}