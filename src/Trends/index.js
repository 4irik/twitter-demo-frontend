import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Trend from "./Trend";

const Wrapper = styled.aside`
  margin-top: 15px;
  background-color: #fff;
  padding: 15px 15px 45px 15px;
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

export default props => {
  return (
    <Wrapper>
      <Header>
        United Kingdom Trends <Delimiter>•</Delimiter>{" "}
        <HeaderChanger to="#">Change</HeaderChanger>
      </Header>
      <Trend title="#BringYourDogToWorkDay" />
      <Trend title="#FridayFeeling" count="12.1K" />
      <Trend
        title="#BrexitAnniversary"
        hint="It’s one year since the UK voted to leave the European Union"
      />
      <Trend title="HMS Queen Elizabeth" count="1,036" />
      <Trend title="Joe Budden" count="1,036" />
      <Trend title="Trident" count="6,136" />
    </Wrapper>
  );
};
