import React from "react";
import "../style/Body.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function Body(props) {
  return (
    <section className="body-div_1">
      <div className="body-div_2">
        <h2 className="h2"> Lorum Ipsum</h2>
        <button className="button-body">
          <a href="/groceryside">Click Here</a>
        </button>
      </div>
      <div className="body-process">
        <div className="body-process_text">
          <h2>Step by step process</h2>
        </div>
        <div className="body-process_image"></div>
      </div>
      <div className="body-process">
        <div className="body-whoweare_image"></div>
        <div className="body-whoweare_text">
          <h2>Who we are</h2>
        </div>
      </div>
      <div className="body-stats">
        <div className="body-stats_food">
          <FaRegTrashAlt className="Faicon" />
          <h2>food waste</h2>
        </div>
        <div className="body-stats_money">
          <FaMoneyBillAlt className="Faicon" />
          <h2>save money</h2>
        </div>
      </div>
      <div className="body-process">
        <div className="body-whoweare_image"></div>
        <div className="body-whoweare_text">
          <h2>Who we serve</h2>
        </div>
      </div>
      <div className="body-downlaod">
        <h2 className="body-downlaod_h2">download now</h2>
        <button className="body-downlaod_button">
        </button>
      </div>
    </section>
  );
}
