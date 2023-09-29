import React from "react";
import { formatDescription } from "../../utils/formating";
import "./Resume.css";

const ResumeItem = (props) => {
  const { item } = props;

  // Determine the CSS class based on companyName
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

  // Format the description
  const formattedDescription = formatDescription(item.description);

  return (
    <div className="col-twelve">
      <div className="timeline-wrap">
        <div className="timeline-block">
          <div
            className="timeline-ico"
            style={{
              background: `url('./images/${companyClass}.png')`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
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

export default ResumeItem;
