import React from "react";
import "../../style/grocer_side/Body.css";

export default function Body(props) {
  return (
    <section className="grocer_side-body-div_1">
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-process_text">
          <h2>Who we are</h2>
        </div>
        <div className="grocer_side-body-process_image"></div>
      </div>
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-process_text">
          <h2>Step by step process</h2>
        </div>
        <div className="grocer_side-body-process_image"></div>
      </div>
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-process_text">
          <h2>Become a partner</h2>
        </div>
        <div className="grocer_side-body-process_image"></div>
      </div>
    </section>
  );
}
