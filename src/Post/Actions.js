import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ActionWrapper = styled.div`
  padding-top: 10px;
  display: flex;
`;

const ActionLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isUsed ? "#e2264d" : "#667580")};
  font-size: 13px;
  width: 70px;
`;

const ActionIcon = styled.img`
  max-height: 15px;
  max-width: 20px;
  margin-right: 10px;
`;

export default props => {
  return (
    <ActionWrapper>
      {Object.keys(props.actions).map(key => (
        <ActionLink to="#" isUsed={props.actions[key].isUsed}>
          <ActionIcon src={props.actions[key].icon} alt="" />
          {props.actions[key].count || ""}
        </ActionLink>
      ))}
    </ActionWrapper>
  );
};
