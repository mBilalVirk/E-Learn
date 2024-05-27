import React from "react";
import { offerData } from "../data/Data";

export default function Offer({offer}) {
  return (
    <div>
      <section id="offer">
        <div className="about-left-col">
          <img src={offer} alt="" />
        </div>
        <div className="about-right-col">
          <div className="about-text">
            {offerData.title}
            <span className="square"></span>
            <p>
              {offerData.description}
            </p>
            <button className="common-btn"> Start free Trial</button>
            <div className="line">
              <span className="line-1" />
              <br />
              <span className="line-2" />
              <br />
              <span className="line-3" />
            </div>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing </h2>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
