import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconComment from "./asset/icon/comments.svg";
import iconRetweet from "./asset/icon/retweet.svg";
import iconLoves from "./asset/icon/loves.svg";
import iconLovesUsed from "./asset/icon/loves_active.svg";
import iconEnvelope from "./asset/icon/envelope.svg";

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
      <ActionLink to="#" isUsed={props.actions.comment.isUsed}>
        <ActionIcon src={iconComment} alt="" />
        {props.actions.comment.count || ""}
      </ActionLink>
      <ActionLink to="#" isUsed={props.actions.retweet.isUsed}>
        <ActionIcon src={iconRetweet} alt="" />
        {props.actions.retweet.count || ""}
      </ActionLink>
      <ActionLink to="#" isUsed={props.actions.loves.isUsed}>
        <ActionIcon
          src={props.actions.loves.isUsed ? iconLovesUsed : iconLoves}
          alt=""
        />
        {props.actions.loves.count || ""}
      </ActionLink>
      <ActionLink to="#" isUsed={props.actions.envelope.isUsed}>
        <ActionIcon src={iconEnvelope} alt="" />
        {props.actions.envelope.count || ""}
      </ActionLink>
    </ActionWrapper>
  );
};
