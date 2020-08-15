import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./home/pages/Home";
import Auth from "./auth/pages/Auth";
import NewImage from "./home/pages/NewImage";

import { useFirebaseApp, useUser } from "reactfire";

// import "./App.css";

function App() {
  // const firebase = useFirebaseApp();
  const user = useUser();
  //console.log(firebase);
  let routes;

  if (user) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/new" exact>
          <NewImage />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }

  return <Router>{routes}</Router>;
}

export default App;
