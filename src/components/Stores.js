import React from "react";
import Android from "../icons/Android.js"; // https://fontawesome.com/
import Apple from "../icons/Apple.js"; // https://fontawesome.com/
import Windows from "../icons/Windows.js"; // https://fontawesome.com/
import "./Stores.css";

function Stores({ theme }) {
  return (
    <div className="text-center">
      <a
        aria-label="Official Android App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=ba.vaktija.android"
      >
        <Android height="48" width="48" />
      </a>
      <a
        aria-label="Official iOS App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://itunes.apple.com/us/app/vaktija.ba/id1095343967?ls=1&mt=8"
      >
        <Apple height="48" width="48" />
      </a>
      <a
        aria-label="Official Windows App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.microsoft.com/en-us/store/apps/vaktijaba/9nblggh5lc4p"
      >
        <Windows height="48" width="48" />
      </a>
    </div>
  );
}

export default Stores;
