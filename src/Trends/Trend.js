import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 15px;
`;

const Trend = styled(Link)`
  color: #1da1f2;
  line-height: 20px;
  font-size: 15px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Hint = styled.span`
  line-height: 20px;
  font-size: 12px;
  color: #66757f;
  display: block;
`;

export default props => {
  return (
    <Wrapper>
      <Trend to="#">{props.title}</Trend>
      {props.hint ? <Hint>{props.hint}</Hint> : ""}
      {props.count ? <Hint>{props.count} Tweets</Hint> : ""}
    </Wrapper>
  );
};
