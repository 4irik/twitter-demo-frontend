import React from "react";
import styled from "styled-components";

import Pinned from "./Pin";
import Autor from "./Autor";
import Actions from "./Actions";
import Card from "./Card";

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
}).attrs({
  lineHeight: props => (props.isCard ? 25 : 30),
  fontSize: props => (props.isCard ? 15 : 25),
  fontWeight: props => (props.isCard ? "normal" : 300)
})`
  line-height: ${props => props.lineHeight}px;
  font-size: ${props => props.fontSize}px;
  color: #292f33;
  white-space: pre-wrap;
  font-weight: ${props => props.fontWeight};
  & a {
    color: #1da1f2;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

const Image = styled(props => {
  return props.img ? (
    <img src={props.img} className={props.className} alt="" />
  ) : (
    ""
  );
})`
  margin-top: 10px;
  max-width: 100%;
  border: none;
`;

export default function(props) {
  return (
    <Tweet>
      <Pinned isPinned={props.isPinned} />
      <Autor autor={props.autor} createdAt={props.createdAt} />
      <Content text={props.text} isCard={props.card ? true : false} />
      <Card card={props.card} />
      <Image img={props.image} />
      <Actions actions={props.actions} />
    </Tweet>
  );
}
