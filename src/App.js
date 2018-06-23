import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Cover from "./Cover";
import Menu from "./Menu";
import Post from "./Post";
import Profile from "./Profile";
import Followers from "./Followers";
import Media from "./Media";

const UserProfile = {
  name: "Every Interaction",
  account: "EveryInteract"
};

function ProfilePage() {
  return (
    <div>
      <Header />
      <Cover />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <Profile />
            <Followers />
            <Media />
          </div>
          <div className="col-xs-6">
            <Post />
          </div>
        </div>
      </div>
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
