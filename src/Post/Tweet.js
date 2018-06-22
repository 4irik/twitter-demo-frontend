import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconPinned from "./asset/icon/pinned.svg";

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

const Autor = props => {
  let createdText = props.createdAt;
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
  if (!props.text) {
    return "";
  }
  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={rawHtml(props.text)}
    />
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

const rawHtml = function(html) {
  return { __html: html };
};

export default function(props) {
  return (
    <Tweet>
      <Pinned isPinned={props.isPinned} />
      <Autor autor={props.autor} createdAt={props.createdAt} />
      <Content text={props.text} />
    </Tweet>
  );
}
