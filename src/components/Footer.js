import React from "react";
import Envelope from "../icons/Envelope.js"; // https://fontawesome.com/
import Code from "../icons/Code.js"; // https://fontawesome.com/
import Android from "../icons/Android.js"; // https://fontawesome.com/
// import Apple from "../icons/Apple.js"; // https://fontawesome.com/
import Windows from "../icons/Windows.js"; // https://fontawesome.com/
import Github from "../icons/Github.js"; // https://fontawesome.com/
import Moon from "../icons/Moon.js"; // https://fontawesome.com/
import Sun from "../icons/Sun.js"; // https://fontawesome.com/
import "./Footer.css";

function Footer({ theme, toggleTheme }) {
  return (
    <p className="icons">
      <a
        aria-label="Contact E-mail"
        className="links"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:info@vaktija.ba"
      >
        <Envelope height="18" width="18" className={`envelope ${theme}`} />
      </a>
      <a
        aria-label="API"
        className="links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.vaktija.ba/vaktija/v1"
      >
        <Code height="18" width="18" className={`code ${theme}`} />
      </a>
      <a
        aria-label="Official Android App"
        className="links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=ba.vaktija.android"
      >
        <Android height="18" width="18" className={`android ${theme}`} />
      </a>
      {/* <a
        aria-label="Official iOS App"
        className="links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://apps.apple.com/app/id1095343967"
      >
        <Apple height="18" width="18" className={`apple ${theme}`} />
      </a> */}
      <a
        aria-label="Official Windows App"
        className="links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.microsoft.com/en-us/store/apps/vaktijaba/9nblggh5lc4p"
      >
        <Windows height="18" width="18" className={`windows ${theme}`} />
      </a>
      <a
        aria-label="GitHub"
        className="links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/vaktija"
      >
        <Github height="18" width="18" className={`github ${theme}`} />
      </a>
      <span className="toggle-theme">
        {theme === "light" ? (
          <Moon
            height="18"
            width="18"
            className={`moon ${theme}`}
            onClick={() => toggleTheme("dark")}
          />
        ) : (
          <Sun
            height="18"
            width="18"
            className={`sun ${theme}`}
            onClick={() => toggleTheme("light")}
          />
        )}
      </span>
    </p>
  );
}

export default Footer;
