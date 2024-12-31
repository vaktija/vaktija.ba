import React, { useEffect } from "react";
// requires HTTPS
import { useWakeLock } from 'react-screen-wake-lock';
import Unlock from "../icons/Unlock.js"; // https://fontawesome.com/
import moment from "moment";
import "./Counter.css";

function Counter({ vakatTime, theme, setKeepAwake, keepAwake }) {
  // eslint-disable-next-line
  const { isSupported, released, request, release } = useWakeLock();
  const vakatMoment = moment(vakatTime, "HH:mm").tz("Europe/Sarajevo");
  const duration = moment.duration(
    vakatMoment.diff(moment().tz("Europe/Sarajevo"))
  );

  useEffect(() => {
    released === false ? setKeepAwake(true) : setKeepAwake(false);
  }, [released, setKeepAwake]);

  if (vakatTime === undefined) {
    return null;
  } else {
    return (<>
      {keepAwake &&
        <Unlock className={`unlock ${theme}`}
          height="15"
          width="15"
        />}
      <div
        className={`counter counter-${theme}`}
        onClick={() => released === false ? release() : request()}
      >
        {duration.format("*HH:mm:ss")}
      </div>
    </>
    );
  }
}

export default Counter;
