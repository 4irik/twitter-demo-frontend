import React from "react";
import Helmet from "react-helmet";

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

import { profiles, suggetions, trends, followers, media } from "./data";

export default props => {
  let profile = profiles.find(
    profile => profile.account === props.match.params.account
  );
  return (
    <div>
      <Helmet>
        <title>
          {profile.name} (@{profile.account}) | Twitter
        </title>
      </Helmet>
      <Header />
      <Cover background={profile.background} />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <Profile profile={profile} />
            <Followers
              followers={followers.accounts(props.match.params.account)}
              count={followers.count(props.match.params.account)}
            />
            <Media
              count={media.count(props.match.params.account)}
              media={media.media()}
            />
          </div>
          <div className="col-xs-6">
            <Post profile={profile} tweets={profile.tweets} />
          </div>
          <div className="col-xs-3">
            <Suggestions
              suggetions={suggetions.filter(
                item => item.account !== props.match.params.account
              )}
            />
            <Trends {...trends} />
            <Policy policyText="© 2018 Twitter  About  Help Center  Terms Privacy policy  Cookies  Ads info" />
          </div>
        </div>
      </div>
    </div>
  );
};
