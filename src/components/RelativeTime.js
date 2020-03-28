import React from "react";
import moment from "moment";
import "moment-timezone";
import "moment/locale/bs";
import styles from "./RelativeTime.module.css";

function RelativeTime({ currentMoment, vakatTime, theme }) {
  return (
    <p className={[styles["relative-time"], styles[theme]].join(" ")}>
      {currentMoment.to(moment(vakatTime, "HH:mm").tz("Europe/Sarajevo"))}
    </p>
  );
}

export default RelativeTime;
