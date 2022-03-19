import React from "react";
import "../../style/user_side/Body.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import emoji from "../../images/how we roll emoji.png";
import browseItems from "../../images/browse items.png";
import checkout from "../../images/checkout.png";
import pickUpOrder from "../../images/pick-up order.png";
import icQuick from "../../images/ic_quick.png";
import icMask from "../../images/ic_mask.png";
import icHelp from "../../images/ic_help.png";

export default function Body(props) {
  return (
    <section className="user_side-body-div_1">
      <div className="user_side-body-div_2">
        <h1 className="user_side-body-h1">How we roll</h1>
        <img className="user_side-body-emoji" src={emoji} alt="" />
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={browseItems} alt="" />
          <p className="user_side-body-process_text">Browse through items at a small grocer near you using our app.</p>
        </div>
        <div className="user_side-body-process_image"></div>
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={checkout} alt="" />
          <p className="user_side-body-process_text">Browse through items at a small grocer near you using our app.</p>
        </div>
        <div className="user_side-body-process_image"></div>
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={pickUpOrder} alt="" />
          <p className="user_side-body-process_text">Browse through items at a small grocer near you using our app.</p>
        </div>
        <div className="user_side-body-process_image"></div>
      </div>
      <div className="user_side-body-stats">
        <div className="user_side-body-stats_item">
          <img src={icQuick} alt="" />
          <h2>Quick and<br />convenient</h2>
        </div>
        <div className="user_side-body-stats_item">
          <img src={icMask} alt="" />
          <h2>Distanced<br />Shopping</h2>
        </div>
        <div className="user_side-body-stats_item">
          <img src={icHelp} alt="" />
          <h2>Help small<br />businesses in their<br />time of need</h2>
        </div>
      </div>
      <div className="user_side-body-downlaod">
        <button className="user_side-body-downlaod_button">Download</button>
        <h2 className="user_side-body-downlaod_h2">the app</h2>
      </div>
    </section>
  );
}
