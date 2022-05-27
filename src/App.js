import React from "react";
import { Fragment } from "react";

import { Link, Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import NeflixStart from "./components/Netflix/NeflixStart";
import NetflixLogin from "./components/Netflix/NetflixLoginPage/NetflixLogin";
import NetflixProfile from "./components/Netflix/NetflixProfilepage/NetflixProfile";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Header />
          <NeflixStart />
          <Footer />
        </Route>

        <Route exact path="/login">
          <NetflixLogin />
        </Route>

        <Route exact path="/profile">
          <NetflixProfile />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
