import React from "react";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="row">
        <div className="col-six tab-full pull-right social">
          <ul className="footer-social">
            <li>
              <a href="https://www.linkedin.com/in/arun-kumar-reddy-vemireddy-a76031131/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/arunvemireddy" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full">
          <div className="copyright">
            <span>Css credits <a href="http://www.styleshout.com/">styleshout</a></span>
          </div>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
