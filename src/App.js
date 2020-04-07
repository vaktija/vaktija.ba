import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import slugify from "slugify";
import { locations } from "./data/vaktija.json";
import Daily from "./components/Daily";
import Mobile from "./components/Mobile";
import ThemeContextProvider from "./contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Daily root />} />
          <Route path="/mobile" render={() => <Mobile />} />
          {locations.map(location => (
            <Route
              key={location}
              exact
              path={`/${slugify(location, {
                replacement: "-",
                remove: null,
                lower: true
              })}`}
              render={() => (
                <Daily locationProps={locations.indexOf(location)} />
              )}
            />
          ))}
          <Route
            path="*"
            render={() => (
              <Container>
                <Row>
                  <Col lg={12}>
                    <h1>
                      Not Found <small>404</small>
                    </h1>
                  </Col>
                </Row>
              </Container>
            )}
          />
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
