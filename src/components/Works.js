import React from "react";
import vr from '../images/vr.png';

function Works() {
  return (
    <section id="works">
      <div className="row workdiv">
        <h3 className="workhead">My Works</h3>
        <div className="row">
          <a href="https://dms.licdn.com/playlist/C5605AQFoRSrI5Q1oNA/mp4-720p-30fp-crf28/0/1655614235607?e=1656626400&v=beta&t=Bv1nutIzEFRXtTRhLzm0pxm3JxmfSu6bxhH0BT2zHXw">
            <img src={vr} alt="VR" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Works;
