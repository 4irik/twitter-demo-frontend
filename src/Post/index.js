import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Tweet from "./Tweet";

import iconComment from "./asset/icon/comments.svg";
import iconRetweet from "./asset/icon/retweet.svg";
import iconLoves from "./asset/icon/loves.svg";
import iconLovesUsed from "./asset/icon/loves_active.svg";
import iconEnvelope from "./asset/icon/envelope.svg";

const Wrapper = styled.section`
  background-color: #fff;
  margin-top: 15px;
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

const tabMenuData = [
  {
    url: "/everyinteract",
    text: "Tweets"
  },
  {
    url: "/everyinteract/with_replies",
    text: "Tweets & replice"
  },
  {
    url: "/everyinteract/media",
    text: "Media"
  }
];

export default props => {
  return (
    <Wrapper>
      <TabMenu>
        {tabMenuData.map(tabItem => (
          <TabMenuLink to={tabItem.url} activeClassName="active">
            {tabItem.text}
          </TabMenuLink>
        ))}
      </TabMenu>
      {props.tweets.map(tweet => <Tweet {...tweet} />)}
    </Wrapper>
  );
};
