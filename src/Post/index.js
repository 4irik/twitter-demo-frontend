import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Tweet from "./Tweet";

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

const TabMenuData = [
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

const Autors = [
  {
    name: "Every Interaction",
    account: "EveryInteract",
    avatar: process.env.PUBLIC_URL + "img/avatar.jpg"
  }
];

const Tweets = [
  {
    isPinned: true,
    autor: Autors[0],
    createdAt: "2 Mar 2015",
    text:
      "We’ve made so1me more resources for all you wonderful " +
      '<a href="#">#design</a> folk ' +
      '<a href="http://everyinteraction.com/resources/">everyinteraction.com/resources/</a> ' +
      '<a href="#">#webdesign</a> <a href="#">#UI</a>',
    image: process.env.PUBLIC_URL + "img/img.png",
    actions: {
      comment: {
        count: 0,
        isUsed: false
      },
      retweet: {
        count: 17,
        isUsed: false
      },
      loves: {
        count: 47,
        isUsed: true
      },
      envelope: {
        count: 0,
        isUsed: false
      }
    }
  },
  {
    autor: Autors[0],
    createdAt: "23h",
    text:
      "Our new website concept; Taking you " +
      "from… @ Every Interaction " +
      '<a href="https://instagram.com/p/BNFGrfhBP3M/">instagram.com/p/BNFGrfhBP3M/</a>',
    actions: {
      comment: {
        count: 1,
        isUsed: false
      },
      retweet: {
        count: 4,
        isUsed: false
      },
      loves: {
        count: 2,
        isUsed: false
      },
      envelope: {
        count: 0,
        isUsed: false
      }
    }
  },
  {
    autor: Autors[0],
    createdAt: "Nov 18",
    text:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    actions: {
      comment: {
        count: 0,
        isUsed: false
      },
      retweet: {
        count: 0,
        isUsed: false
      },
      loves: {
        count: 0,
        isUsed: false
      },
      envelope: {
        count: 0,
        isUsed: false
      }
    }
  }
];

export default function() {
  return (
    <div className="col-xs-offset-3 col-xs-6">
      <Wrapper>
        <TabMenu>
          {TabMenuData.map(tabItem => (
            <TabMenuLink to={tabItem.url} activeClassName="active">
              {tabItem.text}
            </TabMenuLink>
          ))}
        </TabMenu>
        {Tweets.map(tweet => <Tweet {...tweet} />)}
      </Wrapper>
    </div>
  );
}
