import React from "react";
import "../../style/grocer_side/Body.css";

export default function Body(props) {
  return (
    <section className="grocer_side-body-div_1">
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-process_text">
          <h2>Who we are</h2>
          <p className="grocer_side-body-process_text_light">We're a small company with a big goal. COVID-19 has hit the small guys the hardest and made keeping a business afloat in this time is hard. Larger businesses can move to an online platform to reach their customers event at home. But what about the small guys? We want to provide you with a simple and affordable solution that will increase revenue by reaching your loyal customers anywhere at any time with our solution.</p>
        </div>
      </div>
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-process_text">
          <h2>Our solution</h2>
          <div>
            <p><b>Anyone can use our simple and easy to use app.</b></p>
            <p className="grocer_side-body-process_text_medium">Adding items to your store.</p>
            <p className="grocer_side-body-process_text_light">Simply take pictures of your inventory, add the quantity and you're off to the races!</p>
            <p className="grocer_side-body-process_text_medium">Prepare for pickup</p>
            <p className="grocer_side-body-process_text_light">Take a look at all your orders within the app and prepare for customer pick-up.</p>
            <p className="grocer_side-body-process_text_medium">Spread some smiles!</p>
            <p className="grocer_side-body-process_text_light">Your customers can simply walk in, tell you their order code and then walk out with their order and a smile on their face!</p>
          </div>
        </div>
      </div>
      <div className="grocer_side-body-process">
        <div className="grocer_side-body-partner_text">
          <h2>Become a partner</h2>
          <p className="grocer_side-body-process_text_light">We have a simple, quick and easy application process.</p>
          <button className="grocer_side-partner-button">Apply Now</button>
        </div>
      </div>
    </section>
  );
}
