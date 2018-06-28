import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconPeople from "./asset/icon/people.svg";

import Suggestion from "./Suggestion";

const Wrapper = styled.aside`
  margin-top: 15px;
  background-color: #fff;
  padding: 15px;
`;

const Header = styled.h3`
  font-size: 18px;
  color: #000;
  margin: 0;
`;

const HeaderChanger = styled(Link)`
  color: #1da1f2;
  font-size: 12px;
  font-weight: normal;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Delimiter = styled.span`
  color: #66757f;
  font-size: 8px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const SearchPeople = styled(Link)`
  display: flex;
  linkalign-items: center;
  color: #1da1f2;
  font-size: 13px;
  text-decoration: none;
  padding: 25px 0 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const suggetions = [
  {
    avatar: process.env.PUBLIC_URL + "img/suggetions/avatar_1.png",
    name: "AppleInside",
    account: "@appleinsider",
    isVerified: false
  },
  {
    avatar: process.env.PUBLIC_URL + "img/suggetions/avatar_2.png",
    name: "Creode",
    account: "@Creode",
    isVerified: true
  },
  {
    avatar: process.env.PUBLIC_URL + "img/suggetions/avatar_3.png",
    name: "Epiphany Search",
    account: "@EpiphanySearch",
    isVerified: false
  }
];

export default props => {
  return (
    <Wrapper>
      <Header>
        Who to follow <Delimiter>•</Delimiter>{" "}
        <HeaderChanger to="#">Refresh</HeaderChanger> <Delimiter>•</Delimiter>{" "}
        <HeaderChanger to="#">View all</HeaderChanger>
      </Header>
      {suggetions.map(suggestion => (
        <Suggestion
          avatar={suggestion.avatar}
          name={suggestion.name}
          account={suggestion.account}
          isVerified={suggestion.isVerified}
        />
      ))}
      <SearchPeople to="#">
        <Icon src={iconPeople} alt="" />Find people you know
      </SearchPeople>
    </Wrapper>
  );
};
