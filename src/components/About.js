import React from "react";
import { formatDescription } from "../utils/formating";

class About extends React.Component {
  formatedAbout;
  formatedSkillDescription;
  formatedProfileDescription;

  constructor(props) {
    super(props);
    this.formatedAbout = formatDescription(props.data.about);
    this.formatedSkillDescription = formatDescription(props.data.skillDescription);
    this.formatedProfileDescription = formatDescription(props.data.profileDescription);
  }

  getSkillSection() {
    return (
      <ul>
        {this.props.data.skills.map((element, index) => (
          <li key={index}>
            <strong>{element}</strong>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>
            <div className="intro-info">
              <p className="lead">{this.formatedAbout}</p>
            </div>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>
            <p>{this.formatedProfileDescription}</p>
            <ul className="info-list">
              <li>
                <strong>Fullname:</strong>
                <span>{data.fullName}</span>
              </li>
              <li>
                <strong>Birth Date:</strong>
                <span>{data.birthDate}</span>
              </li>
              <li>
                <strong>Job:</strong>
                <span>{data.jobTitle}</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>{data.email}</span>
              </li>
            </ul>
          </div>

          <div className="col-six tab-full">
            <h3>Skills</h3>
            <p>{this.formatedSkillDescription}</p>
            {this.getSkillSection()}
          </div>
        </div>

        <div className="row button-section">
          <div className="col-twelve">
            <a href="#contact" title="Hire Me" className="button stroke smoothscroll">
              Hire Me
            </a>
            <a href="Resume.pdf" download="Arun_Vemireddy_CV.pdf" title="Download CV" className="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
