import React from "react";
import "../../style/grocery_side/Body.css";

export default function Body(props) {
  return (
    <section className="grocery_side-body-div_1">
      <div className="grocery_side-body-process">
        <div className="grocery_side-body-process_text">
          <h2>Who we are</h2>
        </div>
        <div className="grocery_side-body-process_image"></div>
      </div>
      <div className="grocery_side-body-process">
        <div className="grocery_side-body-process_text">
          <h2>Step by step process</h2>
        </div>
        <div className="grocery_side-body-process_image"></div>
      </div>
      <div className="grocery_side-body-process">
        <div className="grocery_side-body-process_text">
          <h2>Become a partner</h2>
        </div>
        <div className="grocery_side-body-process_image"></div>
      </div>
    </section>
  );
}
