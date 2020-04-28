import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./_store";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

import Profile from "./pages/Profile";
import Reservation from "./pages/Reservation";

import NotFound from "./pages/404";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./assets/main.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/article/:id" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
