import React from "react";
import "../style/Nav.css";

export default function Nav(props) {
  return (
    <section className="nav">
      <div className="nav-div_1">
        <h1>Logo</h1>
      </div>
      <div className="nav-div_2">
        <ul>
          <li>Login</li>
        </ul>
      </div>
    </section>
  );
}
