import React, { Component } from "react";
import Helmet from "react-helmet";
import logo from "./logo.svg";
import "./App.css";

const UserProfile = {
  name: "Every Interaction",
  account: "EveryInteract"
};

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>
            {UserProfile.name} (@{UserProfile.account.toLowerCase()}) | Twitter
          </title>
        </Helmet>
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
}

export default App;
