import React from "react";
import moment from "moment";
import "moment-timezone";
import "moment/locale/bs";
import "./RelativeTime.css";

function RelativeTime({ currentMoment, vakatTime, theme }) {
  return (
    <p className={`relative-time relative-time-${theme}`}>
      {currentMoment.to(moment(vakatTime, "HH:mm").tz("Europe/Sarajevo"))}
    </p>
  );
}

export default RelativeTime;
