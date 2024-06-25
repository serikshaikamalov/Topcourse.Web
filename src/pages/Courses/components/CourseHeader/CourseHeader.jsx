import React from "react";
import "./course-header.scss";

const CourseHeader = ({ data }) => {
  return (
    <section className="course__header p-t-48 p-b-48 bg-color-dark">
      <div className="container">
        <div className="course__header-label m-b-8">
          <span>Курс</span>
        </div>
        <div>
          <h2>{data.name}</h2>
          <p className="m-t-8">{data?.description}</p>
          {/* <div>
            <span>10 Студент</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CourseHeader;
