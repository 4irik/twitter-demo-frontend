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
        {props.title} <Delimiter>•</Delimiter>{" "}
        <HeaderChanger to="#">Change</HeaderChanger>
      </Header>
      {props.trends.map(trend => (
        <Trend title={trend.title} count={trend.count} hint={trend.hint} />
      ))}
    </Wrapper>
  );
};
