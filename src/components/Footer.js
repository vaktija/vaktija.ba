import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

function Footer({ theme, toggleTheme }) {
  return (
    <footer className="footer">
      <Grid>
        <Row>
          <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
            <p className="icons">
              <a
                aria-label="Contact E-mail"
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@vaktija.ba"
              >
                <FontAwesomeIcon
                  className={theme}
                  icon={["fas", "envelope"]}
                  size="1x"
                />
              </a>
              <a
                aria-label="API"
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.vaktija.ba/vaktija/v1"
              >
                <FontAwesomeIcon
                  className={theme}
                  icon={["fas", "code"]}
                  size="1x"
                />
              </a>
              <a
                aria-label="GitHub"
                className="links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/vaktija"
              >
                <FontAwesomeIcon
                  className={theme}
                  icon={["fab", "github"]}
                  size="1x"
                />
              </a>
              {/* {"|"} */}
              <span className="toggle-theme">
                {theme === "light" ? (
                  <FontAwesomeIcon
                    icon={["fas", "moon"]}
                    size="1x"
                    onClick={() => toggleTheme("dark")}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={["fas", "sun"]}
                    size="1x"
                    onClick={() => toggleTheme("light")}
                  />
                )}
              </span>
            </p>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}

export default Footer;
