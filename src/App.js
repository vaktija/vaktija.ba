import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
          <Route exact path="/" render={props => <Daily {...props} root />} />
          <Redirect
            from="/sarajevo"
            to={{
              pathname: "/",
              sarajevo: true
            }}
          />
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
              render={props => (
                <Daily {...props} locationProps={locations.indexOf(location)} />
              )}
            />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
