import React from "react";
import { formatDescription } from "../../utils/formating";
import "./Resume.css";

const ResumeItem = (props) => {
  const { item } = props;

  let companyClass = "";
  switch (item.companyName) {
    case "Virtusa":
      companyClass = "virtusaBg";
      break;
    case "Utah State University":
      companyClass = "usulogo";
      break;
    case "SICET":
      companyClass = "sicetlogo";
      break;
    default:
      break;
  }

  const formattedDescription = formatDescription(item.description);

  return (
    <div className="col-twelve">
      <div className="timeline-wrap">
        <div
          className="timeline-block"
          style={{
            background: `url('./images/${companyClass}.png')`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="timeline-header">
            <h3>{item.position}</h3>
            <p>
              {item.from} - {item.to}
            </p>
          </div>
          <div className="timeline-content">
            <h4>{item.companyName}</h4>
            <p>{formattedDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
