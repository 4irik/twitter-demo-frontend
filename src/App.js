import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import ProfilePage from "./ProfilePage";

export default function() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/everyinteract" />
          <Route path="/:account" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
