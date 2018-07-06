import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.aside`
  margin-top: 20px;
`;

const PolicyLink = styled(Link)`
  color: #718290;
  line-height: 18px;
  font-size: 13px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default props => {
  return (
    <Wrapper>
      <PolicyLink to="#">{props.policyText}</PolicyLink>
    </Wrapper>
  );
};
