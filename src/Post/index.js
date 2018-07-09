import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import Tweet from "./Tweet";

import { tweets } from "../data";

const Wrapper = styled.section.attrs({
  backgroundColor: props => (props.empty ? "transparent" : "#fff"),
  padding: props => (props.empty ? "40px" : 0)
})`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  margin-top: 15px;
`;

const EmptyHeader = styled.h3`
  font-size: 27px;
  margin: 0 0 15px 0;
`;

const AccountName = styled.span`
  font-weight: normal;
`;

const EmptyText = styled.p`
  color: #657786;
  font-size: 14px;
`;

const TabMenu = styled.nav`
  padding: 15px 0;
`;

const TabMenuLink = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 0 15px;
  &:hover,
  &.active {
    color: #000;
  }
`;

export default props => {
  let userTweets = tweets.filter(
    tweet => tweet.wall.account === props.profile.account
  );

  if (userTweets.length < 1) {
    return (
      <Wrapper empty={true}>
        <EmptyHeader>
          <AccountName>@{props.profile.account}</AccountName> hasn't Tweeted{" "}
        </EmptyHeader>
        <EmptyText>When they do, their Tweets will show up here.</EmptyText>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TabMenu>
        <TabMenuLink
          exact
          to={`/${props.profile.account}`}
          activeClassName="active"
        >
          Tweets
        </TabMenuLink>
        <TabMenuLink
          to={`/${props.profile.account}/with_replies`}
          activeClassName="active"
        >
          Tweets & replice
        </TabMenuLink>
        <TabMenuLink
          to={`/${props.profile.account}/media`}
          activeClassName="active"
        >
          Media
        </TabMenuLink>
      </TabMenu>
      <Route
        exact
        path={`/${props.profile.account}`}
        render={() => userTweets.map(tweet => <Tweet {...tweet} />)}
      />
      <Route
        path={`/${props.profile.account}/with_replies`}
        render={() =>
          userTweets
            .filter(tweet => tweet.actions.comment.count > 0)
            .map(tweet => <Tweet {...tweet} />)
        }
      />
      <Route
        path={`/${props.profile.account}/media`}
        render={() =>
          userTweets
            .filter(tweet => tweet.image)
            .map(tweet => <Tweet {...tweet} />)
        }
      />
    </Wrapper>
  );
};
