import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import slugify from "slugify";
import "./Locations.css";

function Locations({ closeNav, locations, locationsShort, weights }) {
  return (
    <div id="sidenav" className="sidenav">
      <Container>
        <Row>
          <Col className="text-end" xs={12} sm={12} md={12} lg={12}>
            <a href="true" className="closebtn" onClick={e => closeNav(e)}>
              &times;
            </a>
          </Col>
        </Row>
        <Row>
          <Col
            className="d-flex flex-row flex-wrap justify-content-center align-items-center pb-5"
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            {locations.map((location, index) => {
              return (
                <span className="px-3" key={index}>
                  <Link
                    className={`location-${weights[index]}`}
                    to={`/${slugify(location, {
                      replacement: "-",
                      remove: null,
                      lower: true
                    })}`}
                  >
                    {locationsShort[index]}
                  </Link>
                </span>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Locations;
