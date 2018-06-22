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

const ActionLink = styled(props => {
  return (
    <Link to="#" className={props.className}>
      <ActionIcon src={props.icon} alt="" />
      {props.count || ""}
    </Link>
  );
})`
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
  let resolveIcon = function(key, isUsed) {
    let icon;

    switch (key) {
      case "comment":
        icon = iconComment;
        break;
      case "retweet":
        icon = iconRetweet;
        break;
      case "loves":
        icon = isUsed ? iconLovesUsed : iconLoves;
        break;
      default:
        icon = iconEnvelope;
    }

    return icon;
  };

  return (
    <ActionWrapper>
      {Object.keys(props.actions).map(key => (
        <ActionLink
          icon={resolveIcon(key, props.actions[key].isUsed)}
          count={props.actions[key].count}
          isUsed={props.actions[key].isUsed}
        />
      ))}
    </ActionWrapper>
  );
};
