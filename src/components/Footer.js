import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function Footer({ theme }) {
    return (
        <footer className="footer">
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <p className="text-muted text-center">
                            <a className={`links-${theme}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontWeight: 700, fontSize: "smaller" }}
                                href="https://api.vaktija.ba/vaktija/v1">API</a> {" "}
                            <a className={`links-${theme}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontWeight: 700, fontSize: "smaller" }}
                                href="https://github.com/vaktija">GITHUB</a> {" "}
                            <a className={`links-${theme}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontWeight: 700, fontSize: "smaller" }}
                                href="mailto:info@vaktija.ba">KONTAKT</a> {" | "}
                            <span className={`footer-${theme}`}
                                style={{ fontWeight: 400, fontSize: "x-small" }}>2019 VAKTIJA</span>
                        </p>
                    </Col>
                </Row>
            </Grid>
        </footer>
    )
}

export default Footer;
