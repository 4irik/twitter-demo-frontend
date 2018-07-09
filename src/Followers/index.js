import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconFollowers from "./asset/icon/followers.svg";

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

const FollowersLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const AvatarBlock = styled.div`
  margin-top: 10px;
`;

const AvatarLink = styled(Link)`
  margin: 0 5px 5px 0;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export default props => {
  return !props.count ? null : (
    <Wrapper>
      <Title>
        <Icon src={iconFollowers} />{" "}
        <FollowersLink to="">{props.count} Followers you know</FollowersLink>
      </Title>
      <AvatarBlock>
        {props.followers.map(foolower => (
          <AvatarLink to={foolower.account} title={foolower.name}>
            <Avatar src={foolower.avatar} alt="" />
          </AvatarLink>
        ))}
      </AvatarBlock>
    </Wrapper>
  );
};
