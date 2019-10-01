import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Counter extends Component {

    render() {

        let { theme } = this.props;

        return (
            <footer className="footer">
                <Grid>
                    <Row>
                        <Col xs={12} lg={12}>
                            <p className="text-muted text-center">
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#337ab7", fontWeight: 700, fontSize: "smaller" }} href="https://api.vaktija.ba/vaktija/v1">
                                    API
                                                </a> {" "}

                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#337ab7", fontWeight: 700, fontSize: "smaller" }} href="https://github.com/vaktija">
                                    GITHUB
                                                </a> {" "}

                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#337ab7", fontWeight: 700, fontSize: "smaller" }} href="mailto:info@vaktija.ba">
                                    KONTAKT
                                                </a> {" | "}
                                <span className={`footer-${theme}`} style={{ fontWeight: 400, fontSize: "x-small" }}>2019 VAKTIJA</span>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )

    }
}

export default Counter;


