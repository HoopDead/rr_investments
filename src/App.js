/* Everything else */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/* Here we imnport assets */
import "./index.css";
/* here we import pages or components */

import Landing from "./pages/landing_page.jsx";
import ProjectDetail from "./pages/project_detail.jsx";


class App extends Component {
  render() {
    return (
      <div>
        <Router forceRefresh={true}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/projekt/:slug" exact component={ProjectDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
