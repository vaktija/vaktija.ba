import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactGA from "react-ga";
// https://fontawesome.com/
import Envelope from "../icons/Envelope.js";
import Code from "../icons/Code.js";
import Github from "../icons/Github.js";
import Moon from "../icons/Moon.js";
import Sun from "../icons/Sun.js";
import "./Footer.css";

function Footer({ theme, toggleTheme }) {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
            <p className="icons">
              <a
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: "Mailto clicked",
                    label: "info",
                    nonInteraction: true
                  })
                }
                aria-label="Contact E-mail"
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@vaktija.ba"
              >
                <Envelope
                  height="18"
                  width="18"
                  className={`envelope ${theme}`}
                />
              </a>
              <a
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: "API link clicked",
                    label: "api.vaktija.ba",
                    nonInteraction: true
                  })
                }
                aria-label="API"
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.vaktija.ba/vaktija/v1"
              >
                <Code height="18" width="18" className={`code ${theme}`} />
              </a>
              <a
                onClick={() =>
                  ReactGA.event({
                    category: "Link",
                    action: "GitHub link clicked",
                    label: "github.com/vaktija",
                    nonInteraction: true
                  })
                }
                aria-label="GitHub"
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/vaktija"
              >
                <Github height="18" width="18" className={`github ${theme}`} />
              </a>
              <span
                onClick={() =>
                  ReactGA.event({
                    category: "Theme",
                    action: "Toggle theme clicked",
                    label: theme,
                    nonInteraction: true
                  })
                }
                className="toggle-theme"
              >
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
