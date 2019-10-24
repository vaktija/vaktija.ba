import React from 'react';
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import slugify from 'slugify';
import { locations } from './data/vaktija.json';
import Daily from './components/Daily';
import Mobile from './components/Mobile';
import ThemeContextProvider from './contexts/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <ThemeContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Daily root />} />
          <Route path="/mobile" render={() => <Mobile />} />
          {
            locations.map(location => <Route
              key={location}
              exact
              path={`/${slugify(location, { replacement: "-", remove: null, lower: true })}`}
              render={() => <Daily locationProps={locations.indexOf(location)} />} />)
          }
          <Route path="*"
            render={() => <Grid>
              <Row>
                <Col lg={12}>
                  <PageHeader>
                    Not Found <small>404</small>
                  </PageHeader>
                </Col>
              </Row>
            </Grid>} />
        </Switch>
      </Router>
    </ThemeContextProvider>
  )
}

export default App;
