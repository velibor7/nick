import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home/pages/Home";
import ImageDetail from "./home/components/ImageItem";
import NewImage from "./home/pages/NewImage";

// import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/new" exact>
          <NewImage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
