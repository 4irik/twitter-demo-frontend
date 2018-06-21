import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HollowButton } from "../Common/Button";

import iconMore from "./asset/icon/more.svg";

const Wrapper = styled.div`
  background-color: #fff;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  color: #707e88;
  text-align: center;
  line-height: 21px;
  border-bottom: 4px solid transparent;
  padding: 8px 15px;
  &.active {
    border-color: #1da1f2;
  }
`;

const MenuCount = styled.span`
  font-size: 18px;
  display: block;
  ${MenuLink}:hover &,
  ${MenuLink}.active & {
    color: #1da1f2;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 62px;
`;

const MoreButton = styled.button`
  background-color: transparent;
  height: 14px;
  border: 0;
  padding: 0 0 0 15px;
  cursor: pointer;
`;

const MenuConfig = [
  {
    url: "/everyinteract",
    text: "Tweets",
    count: 8056
  },
  {
    url: "/everyinteract/following",
    text: "Following",
    count: 721
  },
  {
    url: "/everyinteract/followers",
    text: "Followers",
    count: 1815
  },
  {
    url: "/everyinteract/likes",
    text: "Likes",
    count: 460
  },
  {
    url: "/everyinteract/lists",
    text: "Lists",
    count: 2
  }
];

export default function() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-xs-offset-4 col-xs-4">
          <Menu>
            {MenuConfig.map(menuItem => (
              <MenuLink to={menuItem.url} activeClassName="active">
                {menuItem.text}
                <MenuCount>{menuItem.count.toLocaleString()}</MenuCount>
              </MenuLink>
            ))}
          </Menu>
        </div>
        <div className="col-xs-2">
          <ButtonBlock>
            <HollowButton>Follow</HollowButton>
            <MoreButton>
              <img src={iconMore} alt="" />
            </MoreButton>
          </ButtonBlock>
        </div>
      </div>
    </Wrapper>
  );
}
