import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconMedia from "./asset/icon/media.svg";

const Wrapper = styled.div`
  margin-top: 25px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const MediaBlock = styled.div`
  margin-top: 10px;
`;

const MediaLink = styled(Link)`
  margin: 0 5px 5px 0;
`;

const MediaItem = styled.img`
  width: 83px;
  height: 83px;
  border-radius: 2px;
`;

export default props => {
  return !props.count ? null : (
    <Wrapper>
      <Title>
        <Icon src={iconMedia} />{" "}
        <TitleLink to="">{props.count} Photos and videos</TitleLink>
      </Title>
      <MediaBlock>
        {props.media.map(mediaItem => (
          <MediaLink to="#">
            <MediaItem src={mediaItem} alt="" />
          </MediaLink>
        ))}
      </MediaBlock>
    </Wrapper>
  );
};
