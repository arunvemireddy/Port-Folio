import React from "react";
import { Link } from "react-scroll";

class Intro extends React.Component {
  getSocialLinks = () => {
    return Object.entries(this.props.data.links).map(([link, url]) => (
      <li key={link}>
        <a href={url} target="_blank">
          <i className={`fa fa-${link}`}></i>
        </a>
      </li>
    ));
  };

  render() {
    return (
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1>I'm Arun</h1>
              <p className="intro-position">
                <span>Full Stack Developer</span>
                <span>Computer Programmer</span>
              </p>
              <Link
                className="button stroke"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                More About Me
              </Link>
            </div>
          </div>
        </div>

        <ul className="intro-social">{this.getSocialLinks()}</ul>
      </section>
    );
  }
}

export default Intro;
