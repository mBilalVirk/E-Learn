import React from "react";
import {headerData} from "../data/Data.js";


export default function Header({logo}) {
  return (
    <>
      <section id="header">
        <div className="container">
          <img src={logo} alt="" className="logo" />
          <div className="header-text">
            {headerData.title}
            <span className="square"></span>
            <p>
              {headerData.description}
            </p>
            <button className="common-btn"> Read More</button>
            <div className="line">
              <span className="line-1" />
              <br />
              <span className="line-2" />
              <br />
              <span className="line-3" />
            </div>
          </div>
        </div>
        {/* End of container */}
      </section>
      {/* end of header */}
    </>
  );
}
