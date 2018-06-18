import React from "react";
import styled from "styled-components";

import iconHome from "./asset/icon/home.svg";
import iconMoments from "./asset/icon/moments.svg";
import iconMessages from "./asset/icon/messages.svg";
import iconNotifications from "./asset/icon/notifications.svg";
import iconLogo from "./asset/icon/logo.svg";

const Wrapper = styled.div`
  background: white;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 45px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: #667580;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  margin-right: 15px;
`;

const LinkIcon = styled.img`
  margin-right: 4px;
`;

const MenuList = [
  {
    url: "/",
    icon: iconHome,
    name: "Home"
  },
  {
    url: "/moments",
    icon: iconMoments,
    name: "Momemnts"
  },
  {
    url: "/notifications",
    icon: iconNotifications,
    name: "Notifications"
  },
  {
    url: "/messages",
    icon: iconMessages,
    name: "Messages"
  }
];

const LinkLogo = styled.a`
  margin-left: auto;
`;
const Logo = styled.img`
  max-height: 16px;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <Navigation>
              {MenuList.map(property => (
                <Link href={property.url}>
                  <LinkIcon src={property.icon} />
                  {property.name}
                </Link>
              ))}
              <LinkLogo href="/">
                <Logo src={iconLogo} alt="Logo" />
              </LinkLogo>
            </Navigation>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
