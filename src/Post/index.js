import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Tweet from "./Tweet";

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
  if (props.tweets.length < 1) {
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
