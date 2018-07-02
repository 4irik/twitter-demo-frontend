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

const autor = {
  name: "Every Interaction",
  account: "EveryInteract",
  avatar: process.env.PUBLIC_URL + "img/avatar/everyinteract.jpg"
};

function actionMenuConfig() {
  return {
    comment: {
      count: arguments[0],
      isUsed: arguments[1],
      icon: iconComment
    },
    retweet: {
      count: arguments[2],
      isUsed: arguments[3],
      icon: iconRetweet
    },
    loves: {
      count: arguments[4],
      isUsed: arguments[5],
      icon: arguments[5] ? iconLovesUsed : iconLoves
    },
    envelope: {
      count: arguments[6],
      isUsed: arguments[7],
      icon: iconEnvelope
    }
  };
}

const tweets = [
  {
    isPinned: true,
    autor: autor,
    createdAt: "2 Mar 2015",
    text: `We’ve made so1me more resources for all you wonderful <a href="#">#design</a> folk <a href="http://everyinteraction.com/resources/">everyinteraction.com/resources/</a> <a href="#">#webdesign</a> <a href="#">#UI</a>`,
    image: process.env.PUBLIC_URL + "img/img.png",
    actions: actionMenuConfig(0, false, 17, false, 47, true, 0, false)
  },
  {
    autor: autor,
    createdAt: "23h",
    text: `Our new website concept; Taking you from… @ Every Interaction <a href="https://instagram.com/p/BNFGrfhBP3M/">instagram.com/p/BNFGrfhBP3M/</a>`,
    actions: actionMenuConfig(1, false, 4, false, 2, false, 0, false)
  },
  {
    autor: autor,
    createdAt: "Nov 18",
    text: `Variable web fonts are coming, and will open a world of opportunities for weight use online`,
    card: {
      image: process.env.PUBLIC_URL + "img/rectangle.jpg",
      header: "The Future of Web Fonts",
      text: `We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…`,
      source: "vilijamis.com"
    },
    actions: actionMenuConfig(0, false, 0, false, 0, true, 0, false)
  }
];

export default function() {
  return (
    <Wrapper>
      <TabMenu>
        {tabMenuData.map(tabItem => (
          <TabMenuLink to={tabItem.url} activeClassName="active">
            {tabItem.text}
          </TabMenuLink>
        ))}
      </TabMenu>
      {tweets.map(tweet => <Tweet {...tweet} />)}
    </Wrapper>
  );
}
