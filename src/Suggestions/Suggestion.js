import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import iconDelete from "./asset/icon/delete.svg";
import iconVerified from "./asset/icon/verified.svg";

const Wrapper = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding-left: 68px;
  padding-bottom: 10px;
  position: relative;
  margin-top: 10px;
`;

const Avatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 100%;
  position: absolute;
  margin-left: -60px;
`;

const ProfileName = styled(Link)`
  font-size: 13px;
  color: #333333;
  line-height: 20px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: normal;
  margin-bottom: 10px;
  margin-right: 15px;
`;

const ProfileAccount = styled.span`
  text-decoration: none;
  font-weight: normal;
  color: #788a98;
  margin-left: 5px;
`;

const DeleteIcon = styled.img`
  height: 8px;
  width: 8px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
`;

const VerifiedIcon = styled.img`
  height: 18px;
  width: 18px;
  margin-left: 5px;
`;

const Follow = styled.button`
  border-radius: 100px;
  box-shadow: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  padding: 6px 22px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  border-style: solid;
  border-width: 1px;
  color: #1da1f2;
  background-color: #fff;
`;

export default props => {
  return (
    <Wrapper>
      <Avatar src={props.avatar} alt="" />
      <ProfileName to="#">
        {props.name}{" "}
        {props.isVerified ? <VerifiedIcon src={iconVerified} alt="" /> : ""}{" "}
        <ProfileAccount>{props.account}</ProfileAccount>
      </ProfileName>
      <DeleteIcon src={iconDelete} alt="delete suggestion" />
      <Follow>Follow</Follow>
    </Wrapper>
  );
};
