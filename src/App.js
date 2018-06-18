import React, { Component } from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import logo from "./logo.svg";

const UserProfile = {
  name: "Every Interaction",
  account: "EveryInteract"
};

function ProfilePage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default function() {
  return (
    <div>
      <Helmet>
        <title>
          {UserProfile.name} (@{UserProfile.account.toLowerCase()}) | Twitter
        </title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/everyinteract" />
          <Route path="/everyinteract" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
