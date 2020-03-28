import React from "react";
import moment from "moment";
import "moment-timezone";
import "moment/locale/bs";
import "./RelativeTime";

function RelativeTime({ currentMoment, vakatTime, theme }) {
  return (
    <p>
      <i className={`relative-time-${theme}`}>
        {currentMoment.to(moment(vakatTime, "HH:mm").tz("Europe/Sarajevo"))}
      </i>
    </p>
  );
}

export default RelativeTime;
