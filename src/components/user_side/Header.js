import React from "react";
import "../../style/user_side/Header.css"
import art from "../../images/banner_art.svg";
import googlePlay from "../../images/google_play.png";
import appStore from "../../images/app_store.png";

export default function Header(props) {
  return (
    <section className="user_side-header-div_1">
      <div className="user_side-header-div_2">
        <div className="user_side-header-div_3">
          <h1>Save a trip</h1>
          <h1>Save small business</h1>
          <p>We give small businesses an online platform,<br/> and our users an easy way to support them.</p>
        </div>
        <div className="user_side-header-div_5">
          <img src={appStore} className="user_side-header-img_button" alt="" />
          <img src={googlePlay} className="user_side-header-img_button" alt="" />
          <button className="user_side-header-button">Learn more</button>
        </div>
      </div>
      <div className="user_side-header-div_4">
        <img src={art} alt='' />
      </div>
    </section>
  )
}