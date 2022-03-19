import React from "react";
import "../../style/user_side/Body.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function Body(props) {
  return (
    <section className="user_side-body-div_1">
      <div className="user_side-body-div_2">
        <h2 className="user_side-body-h2"> Lorum Ipsum</h2>
        <button className="user_side-body-button">
          <a href="/grocerside">Click Here</a>
        </button>
      </div>
      <div className="user_side-body-process">
        <div className="user_side-body-process_text">
          <h2>Step by step process</h2>
        </div>
        <div className="user_side-body-process_image"></div>
      </div>
      <div className="user_side-body-process">
        <div className="user_side-body-whoweare_image"></div>
        <div className="user_side-body-whoweare_text">
          <h2>Who we are</h2>
        </div>
      </div>
      <div className="user_side-body-stats">
        <div className="user_side-body-stats_food">
          <FaRegTrashAlt className="user_side-body-faicon" />
          <h2>food waste</h2>
        </div>
        <div className="user_side-body-stats_money">
          <FaMoneyBillAlt className="user_side-body-faicon" />
          <h2>save money</h2>
        </div>
      </div>
      <div className="user_side-body-process">
        <div className="user_side-body-whoweare_image"></div>
        <div className="user_side-body-whoweare_text">
          <h2>Who we serve</h2>
        </div>
      </div>
      <div className="user_side-body-downlaod">
        <h2 className="user_side-body-downlaod_h2">download now</h2>
        <button className="user_side-body-downlaod_button">
        </button>
      </div>
    </section>
  );
}
