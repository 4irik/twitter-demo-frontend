import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Pinned from "./Pin";
import Autor from "./Autor";
import Actions from "./Actions";

const Tweet = styled.article`
  border-top: 1px solid #e1e8ed;
  padding: 9px 12px 9px 60px;
`;

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
