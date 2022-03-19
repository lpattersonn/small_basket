import React from "react";
import Nav from "../Nav.js";
import Header from "./Header.js";
import Body from "./Body.js";

export default function GrocerySide(props) {
  return (
    <div className="grocery_side">
      <Nav />
      <Header />
      <Body />
    </div>
  );
}