import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer({ theme, toggleTheme }) {
    return (
        <footer className="footer">
            <Grid>
                <Row>
                    <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                        <p className="text-muted">
                            {
                                theme === 'dark' &&
                                <>
                                    <a className={`store-${theme}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ margin: 15 }}
                                        href="mailto:info@vaktija.ba">
                                        <FontAwesomeIcon style={{ color: "#fff" }} icon={['fas', 'envelope']} size="1x" />
                                    </a>
                                    <a className={`store-${theme}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ margin: 15 }}
                                        href="https://api.vaktija.ba/vaktija/v1">
                                        <FontAwesomeIcon style={{ color: "#fff" }} icon={['fas', 'code']} size="1x" />
                                    </a>
                                    <a className={`store-${theme}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ margin: 15 }}
                                        href="https://github.com/vaktija">
                                        <FontAwesomeIcon style={{ color: "#fff" }} icon={['fab', 'github']} size="1x" />
                                    </a>
                                    {"|"}
                                    <span style={{ cursor: "pointer", margin: 15 }}>
                                        <FontAwesomeIcon style={{ color: "#fff" }} icon={['fas', 'sun']} size="1x" onClick={toggleTheme} />
                                    </span>
                                </>
                            }
                            {
                                theme === 'light' &&
                                <>
                                    <a className={`store-${theme}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ margin: 15 }}
                                        href="mailto:info@vaktija.ba">
                                        <FontAwesomeIcon style={{ color: "#4a4a4a" }} icon={['fas', 'envelope']} size="1x" />
                                    </a>
                                    <a className={`store-${theme}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ margin: 15 }}
                                        href="https://api.vaktija.ba/vaktija/v1">
                                        <FontAwesomeIcon style={{ color: "#4a4a4a" }} icon={['fas', 'code']} size="1x" />
                                    </a>
                                    <a className={`store-${theme}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ margin: 15 }}
                                        href="https://github.com/vaktija">
                                        <FontAwesomeIcon style={{ color: "#4a4a4a" }} icon={['fab', 'github']} size="1x" />
                                    </a>
                                    {"|"}
                                    <span style={{ cursor: "pointer", margin: 15 }}>
                                        <FontAwesomeIcon style={{ color: "#4a4a4a" }} icon={['fas', 'moon']} size="1x" onClick={toggleTheme} />
                                    </span>
                                </>
                            }
                        </p>
                    </Col>
                </Row>
            </Grid>
        </footer>
    )
}

export default Footer;
