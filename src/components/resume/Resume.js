import React from "react";
import ResumeItem from "./ResumeItem";

const Resume = (props) => (
  <section id="resume" className="grey-section">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>Resume</h5>
        <h1>More of my credentials.</h1>
        <p className="lead"></p>
      </div>
    </div>
    <div className="row resume-timeline">
      <div className="col-twelve resume-header">
        <h2>Work Experience</h2>
      </div>
      {props.data.workExperience.map((element, index) => (
        <ResumeItem key={index} item={element} />
      ))}
    </div>
    <div className="row resume-timeline">
      <div className="col-twelve resume-header">
        <h2>Alma mater</h2>
      </div>
      {props.data.education.map((element, index) => (
        <ResumeItem key={index} item={element} />
      ))}
    </div>
  </section>
);

export default Resume;
