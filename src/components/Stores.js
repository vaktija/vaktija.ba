import React from "react";
// https://fontawesome.com/
import Android from "../icons/Android.js";
import Apple from "../icons/Apple.js";
import Windows from "../icons/Windows.js";
import ReactGA from "react-ga";
import "./Stores.css";

function Stores({ theme }) {
  return (
    <div className="text-center">
      <a
        onClick={() =>
          ReactGA.event({
            category: "Store",
            action: "Google Play link clicked",
            label: "Android",
            nonInteraction: true
          })
        }
        aria-label="Official Android App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=ba.vaktija.android"
      >
        <Android height="48" width="48" />
      </a>
      <a
        onClick={() =>
          ReactGA.event({
            category: "Store",
            action: "Apple Store link clicked",
            label: "iOS",
            nonInteraction: true
          })
        }
        aria-label="Official iOS App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://itunes.apple.com/us/app/vaktija.ba/id1095343967?ls=1&mt=8"
      >
        <Apple height="48" width="48" />
      </a>
      <a
        onClick={() =>
          ReactGA.event({
            category: "Store",
            action: "Windows Store link clicked",
            label: "Windows",
            nonInteraction: true
          })
        }
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
