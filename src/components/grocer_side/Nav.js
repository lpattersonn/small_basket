import React from "react";
import "../../style/grocer_side/Nav.css"

export default function Nav(props) {
  return (
    <section className="grocer_side-nav">
      <div className="grocer_side-nav-div_1">
        <h1>Logo</h1>
      </div>
      <div className="grocer_side-nav-div_2">
        <ul>
          <li>Login</li>
        </ul>
      </div>
    </section>
  );
}
