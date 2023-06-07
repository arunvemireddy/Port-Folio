import React from "react";
import { formatDescription } from "../../utils/formating";
import  "./Resume.css";




const ResumeItem = (props) => {
    const { item } = props;
    let iconClass = 'virtusa';
    console.log(item);
    if (item && item.type == "education") {
        iconClass = "fa fa-graduation-cap";
    }
    //TODO: Find a better solution
    const formatedDescription = formatDescription(item.description);
    // const virtusaStyle = {
    //     backgroundImage: `url('https://media.licdn.com/dms/image/D560BAQGEPXDEIb7QDA/company-logo_200_200/0/1682334527897?e=1694044800&v=beta&t=Al5-NjUMkCKXUDFPRBxKozpzMoXr3go4tj3QFPVmdCw')`,
    //   };
      

    return (
        <div className="col-twelve">
            <div className="timeline-wrap">
                <div className="timeline-block">
                <div className="timeline-ico" style={
  item.companyName === 'Virtusa'
    ? {
        background: "url('./images/virtusaBg.png')",
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }
    : item.companyName === 'Utah State University'
    ? {
        background: "url('./images/usulogo.jpeg')",
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }
    : item.companyName === 'SICET'
    ? {
        background: "url('./images/sicetlogo.png')",
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }:{}
    
}>
                        {/* <i className={iconClass}></i> */}
                        {/* <span ></span> */}
                    </div>
                    <div className="timeline-header">
                        <h3>{item.position}</h3>
                        <p>{item.from} - {item.to}</p>
                    </div>
                    <div className="timeline-content">
                        <h4>{item.companyName}</h4>
                        <p>{formatedDescription}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default ResumeItem;