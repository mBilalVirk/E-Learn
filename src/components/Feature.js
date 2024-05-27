import React from "react";
import {featureData} from "../data/Data"

export default function Feature({pic1,pic2,pic3}) {
  return (
    <div>
      <section id="features">
        <div className="feature-row">
          <div className="feature-col">
            <img src={pic1} alt="" />
            <h4>{featureData.feature1.title}</h4>
            <p>{featureData.feature1.description}</p>
          </div>
          <div className="feature-col">
            <img src={pic2} alt="" />
            <h4>{featureData.feature2.title}</h4>
            <p>{featureData.feature2.description}</p>
          </div>
          <div className="feature-col">
            <img src={pic3} alt="" />
            <h4>{featureData.feature3.title}</h4>
            <p>{featureData.feature3.title}</p>
          </div>
        </div>
        <div className="feature-btn">
          <div className="line">
            <span className="line-1" />
            <br />
            <span className="line-2" />
            <br />
            <span className="line-3" />
          </div>
          <button className="common-btn">Contact Us</button>
        </div>
      </section>
    </div>
  );
}
