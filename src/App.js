import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import ProfilePage from "./ProfilePage";

export default function() {
  return (
    <div>
      <Helmet>
        <title>Every Interaction (@everyInteract) | Twitter</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/everyinteract" />
          <Route path="/:account" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
