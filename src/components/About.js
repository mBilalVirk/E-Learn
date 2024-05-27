import React from "react";
import {aboutData} from "../data/Data.js";

export default function About({about}) {
  return (
    <div>
      <section id="about">
        <div className="about-left-col">
          <img src={about} alt="" />
        </div>
        <div className="about-right-col">
          <div className="about-text">
            <h1>{aboutData.title}</h1>
            <span className="square"></span>
            <p>
             {aboutData.description}
             </p>
            <br />
            <br />
            <div className="line">
              <span className="line-1" />
              <br />
              <span className="line-2" />
              <br />
              <span className="line-3" />
            </div>
            <h2>WEBSITE DESIGNIG &amp; DEVELOPMENT </h2>
            <h3>HTML, CSS &amp; JAVASCRIPT SERVICE</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
