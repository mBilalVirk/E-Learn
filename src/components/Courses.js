import React from "react";

export default function Courses({course}) {
  return (
    <div>
      <section id="courses">
        <div className="container course-row">
          <div className="course-left-col">
            <div className="course-text">
              <h1>
                ANY SERVICE ABOUT <br /> WEBSITE
              </h1>
              <span className="square"></span>
              <p>Design any kind of website that represent your business !</p>
              <button className="common-btn"> View all type of website</button>
              <div className="line">
                <span className="line-1" />
                <br />
                <span className="line-2" />
                <br />
                <span className="line-3" />
              </div>
            </div>
          </div>
          <div className="course-right-col">
            <img src={course} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
