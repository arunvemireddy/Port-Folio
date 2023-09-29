import React from "react";
import * as details from "../utils/DetailsConstant";

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContactInfo() {
    const contactInfo = [
      { icon: "icon-pin", title: "Where to find me", content: details.address },
      { icon: "icon-mail", title: "Email Me At", content: details.mail },
      { icon: "icon-phone", title: "Call Me At", content: details.contact },
    ];

    return contactInfo.map((info, index) => (
      <div key={index} className="col-four tab-full">
        <div className="icon">
          <i className={info.icon}></i>
        </div>
        <h5>{info.title}</h5>
        <p>{info.content}</p>
      </div>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <div className="row contact-info">{this.renderContactInfo()}</div>
      </React.Fragment>
    );
  }
}

export default Stats;
