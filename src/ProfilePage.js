import React from "react";

import Header from "./Header";
import Cover from "./Cover";
import Menu from "./Menu";
import Post from "./Post";
import Profile from "./Profile";
import Followers from "./Followers";
import Media from "./Media";
import Suggestions from "./Suggestions";
import Trends from "./Trends";
import Policy from "./Policy";

import { profiles, suggetions } from "./data";

export default props => {
  return (
    <div>
      <Header />
      <Cover />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <Profile
              profile={profiles.find(
                profile => profile.account === props.match.params.account
              )}
            />
            <Followers />
            <Media />
          </div>
          <div className="col-xs-6">
            <Post
              tweets={
                profiles.find(
                  profile => profile.account === props.match.params.account
                ).tweets
              }
            />
          </div>
          <div className="col-xs-3">
            <Suggestions
              suggetions={suggetions.filter(
                item => item.account !== props.match.params.account
              )}
            />
            <Trends />
            <Policy policyText="© 2018 Twitter  About  Help Center  Terms Privacy policy  Cookies  Ads info" />
          </div>
        </div>
      </div>
    </div>
  );
};
