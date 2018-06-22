import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconPinned from "./asset/icon/pinned.svg";
import iconComment from "./asset/icon/comments.svg";
import iconRetweet from "./asset/icon/retweet.svg";
import iconLoves from "./asset/icon/loves.svg";
import iconLovesUsed from "./asset/icon/loves_active.svg";
import iconEnvelope from "./asset/icon/envelope.svg";

const Tweet = styled.article`
  border-top: 1px solid #e1e8ed;
  padding: 9px 12px 9px 60px;
`;

const Context = styled.div`
  display: flex;
  align-items: center;
  margin-left: -22px;
`;

const ContextIcon = styled.img`
  height: 12px;
  margin-right: 10px;
`;

const ContextHint = styled.span`
  color: #707e88;
  font-size: 12px;
`;

const AutorLink = styled(Link)`
  color: #788a98;
  text-decoration: none;
  line-height: 30px;
`;

const Avatar = styled.img`
  max-height: 40px;
  max-width: 40px;
  margin: 7px 0 0 -50px;
  position: absolute;
`;

const AutorName = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #292f33;
`;

const AutorAccount = styled.span`
  font-size: 12px;
`;

const CreateTime = styled.time`
  font-size: 12px;
`;

const Pinned = props => {
  if (!props.isPinned) {
    return "";
  }

  return (
    <Context>
      <ContextIcon src={iconPinned} alt="" />
      <ContextHint>Pinned Tweet</ContextHint>
    </Context>
  );
};

const Autor = props => {
  return (
    <AutorLink to={"/" + props.autor.account}>
      <Avatar src={props.autor.avatar} alt="" />
      <AutorName>{props.autor.name}</AutorName>{" "}
      <AutorAccount>@{props.autor.account}</AutorAccount> •{" "}
      <CreateTime>{props.createdAt}</CreateTime>
    </AutorLink>
  );
};

const Content = styled(props => {
  let rawHtml = { __html: props.text };

  return !props.text ? (
    ""
  ) : (
    <div className={props.className} dangerouslySetInnerHTML={rawHtml} />
  );
})`
  line-height: 30px;
  font-size: 25px;
  color: #292f33;
  white-space: pre-wrap;
  font-weight: 300;
  & a {
    color: #1da1f2;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

const Actions = props => {
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

export default function(props) {
  return (
    <Tweet>
      <Pinned isPinned={props.isPinned} />
      <Autor autor={props.autor} createdAt={props.createdAt} />
      <Content text={props.text} />
      <Actions actions={props.actions} />
    </Tweet>
  );
}
