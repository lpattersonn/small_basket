import React from "react";
import "../../style/user_side/Nav.css"

export default function Nav(props) {
  return (
    <section className="user_side-nav">
      <div className="user_side-nav-div_1">
        <h1>Logo</h1>
      </div>
      <div className="user_side-nav-div_2">
        <ul>
          <li>Login</li>
        </ul>
      </div>
    </section>
  );
}
