import React from "react";
import Nav from "./Nav.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js"

export default function GrocerSide(props) {
  return (
    <div className="grocer_side">
      <Nav />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}