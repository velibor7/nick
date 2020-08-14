import React from "react";
import logo from "./logo.svg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home/pages/Home";
import ImageDetail from "./home/components/ImageItem";

// import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="image/:imageId">
          <ImageDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
