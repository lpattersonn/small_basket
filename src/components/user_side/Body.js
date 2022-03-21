import React from "react";
import "../../style/user_side/Body.css";
import emoji from "../../images/how_we_roll_emoji.png";
import browseItems from "../../images/browse_items.png";
import checkout from "../../images/checkout.png";
import pickUpOrder from "../../images/pick-up_order.png";
import browseImage from "../../images/Browse_mockup.png";
import checkoutImage from "../../images/checkout_mockup.png";
import pickupImage from "../../images/pickup-delivery-mockup.png";
import icQuick from "../../images/ic_quick.png";
import icMask from "../../images/ic_mask.png";
import icHelp from "../../images/ic_help.png";

export default function Body(props) {
  return (
    <section className="user_side-body-div_1">
      <div className="user_side-body-div_3" />
      <div className="user_side-body-div_2">
        <div className="user_side-body-div_2_text">How we roll</div>
        <img className="user_side-body-emoji" src={emoji} alt="" />
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={browseItems} alt="" />
          <p className="user_side-body-process_text">
            Browse through items at a small grocer near you using our app.
          </p>
        </div>
        <div className="user_side-body-process_image">
          <img
            src={browseImage}
            className="user_side-main-image"
            alt="Small Poccket Browse Example"
          />
        </div>
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={checkout} alt="" />
          <div className="user_side-body-process_image_left">
            <img
              src={checkoutImage}
              className="user_side-main-image-left"
              alt="Small Poccket Browse Example"
            />
          </div>
        </div>
        <p className="user_side-body-process_text_right">
          When you have made your selection of goods, pay conveniently right
          through our app. <br /> <br /> See a live update of your order as the
          grocery store puts the items together.
        </p>
      </div>
      <div className="user_side-body-process">
        <div>
          <img src={pickUpOrder} alt="" />
          <p className="user_side-body-process_text">
            When your order is ready, head over to the store for pick-up or wait
            for your delivery to arrive.
          </p>
        </div>
        <div className="user_side-body-process_image">
          <img
            src={pickupImage}
            className="user_side-main-image"
            alt="Small Poccket pickup Example"
            style={{ transform: "scale(1.45)", "margin-bottom": "20px" }}
          />
        </div>
      </div>
      <div className="user_side-body-stats">
        <div className="user_side-body-stats_item">
          <img src={icQuick} alt="" />
          <h2>
            Quick and
            <br />
            convenient
          </h2>
        </div>
        <div className="user_side-body-stats_item">
          <img src={icMask} alt="" />
          <h2>
            Distanced
            <br />
            Shopping
          </h2>
        </div>
        <div className="user_side-body-stats_item">
          <img src={icHelp} alt="" />
          <h2>
            Help small
            <br />
            businesses in their
            <br />
            time of need
          </h2>
        </div>
      </div>
      <div className="user_side-body-subscription">
        <div className="user_side-body-subscription_text_1">
          Don’t pay delivery fees with BasketPass!
        </div>
        <div className="user_side-body-subscription_text_2">
          Starting at $9.99/mo.
        </div>
      </div>
      <div className="user_side-body-downlaod">
        <div className="user_side-body-downlaod_discount_text">
          Get $10 off your first order
        </div>
        <button className="user_side-body-downlaod_button">Download</button>
      </div>
    </section>
  );
}
