import React from "react";
import moment from "moment";
import "./Counter.css";

function Counter({ vakatTime, theme }) {
  const vakatMoment = moment(vakatTime, "HH:mm").tz("Europe/Sarajevo");
  const duration = moment.duration(
    vakatMoment.diff(moment().tz("Europe/Sarajevo"))
  );

  if (vakatTime === undefined) {
    return null;
  } else {
    return (
      <div className={`counter counter-${theme}`}>
        {duration.format("*HH:mm:ss")}
      </div>
    );
  }
}

export default Counter;
