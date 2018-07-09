import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconVerified from "./asset/icon/verified.svg";
import iconLocation from "./asset/icon/location.svg";
import iconLink from "./asset/icon/link.svg";
import iconJoined from "./asset/icon/joined.svg";

const Wrapper = styled.aside`
  font-size: 14px;
`;

const Avatar = styled.img`
  margin-top: -190px;
  border: 1px solid #e7ecf0;
  border-radius: 50%;
  position: relative;
  height: 210px;
  width: 210px;
`;

const Name = styled.h1`
  line-height: 22px;
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

const Verified = styled.img`
  margin-left: 5px;
`;

const AccountName = styled.h2`
  line-height: 21px;
  font-size: 14px;
  color: #697787;
  font-weight: normal;
  margin: 5px 0;
`;

const Follow = styled.span`
  font-size: 12px;
`;

const Description = styled.div`
  margin: 10px 0;
  line-height: 20px;
  font-size: 14px;
  color: #14171a;
  & a {
    color: #1da1f2;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const InfoLink = styled(Link)`
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const InfoIcon = styled.img`
  margin-right: 15px;
`;

const ActionBlock = styled.div`
  margin: 15px 0;
`;

const ActionButton = styled.button`
  cursor: pointer;
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 25px;
  margin-right: 5px;
`;

export default props => {
  return (
    <Wrapper>
      <Avatar src={props.profile.avatar} alt="" />
      <Name>
        {props.profile.name}
        {props.profile.isVerified ? <Verified src={iconVerified} alt="" /> : ""}
      </Name>
      <AccountName>
        @{props.profile.account} <Follow>Follow us</Follow>
      </AccountName>
      {props.profile.description ? (
        <Description
          dangerouslySetInnerHTML={{ __html: props.profile.description }}
        />
      ) : null}
      {props.profile.location ? (
        <InfoLine>
          <InfoIcon src={iconLocation} />
          {props.profile.location}
        </InfoLine>
      ) : null}
      {props.profile.site ? (
        <InfoLine>
          <InfoIcon src={iconLink} />
          <InfoLink to={props.profile.site}>{props.profile.site}</InfoLink>
        </InfoLine>
      ) : null}
      {props.profile.joined ? (
        <InfoLine>
          <InfoIcon src={iconJoined} />
          {props.profile.joined}
        </InfoLine>
      ) : null}
      <ActionBlock>
        <ActionButton>Tweet to</ActionButton>
        <ActionButton>Message</ActionButton>
      </ActionBlock>
    </Wrapper>
  );
};
