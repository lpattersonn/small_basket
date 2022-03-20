import React from "react";
import "../../style/grocer_side/Header.css";
import banner from "../../images/grocer_banner_art.svg";

export default function Header(props) {
  return (
    <section className="grocer_side-header-div_1">
      <div className="grocer_side-header-div_2">
        <div className="grocer_side-header-div_3">
          <h1>Are you a small grocer?</h1>
          <p>
            We want to work with small businesses like<br/>you and provide you with an easy-to-use tool<br/>which will give you an online presence and<br/>help you reach your customer base more<br/>effectively.
          </p>
        </div>
        <div className="grocer_side-header-div_4">
          <button className="grocer_side-header-button">Learn More</button>
          <button className="grocer_side-header-button">Apply Now</button>
        </div>
      </div>
      <div className="grocer_side-header-div_5">
        <img src={banner} alt="grocer side banner art"/>
      </div>
    </section>
  )
}