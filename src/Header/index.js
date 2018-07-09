import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SolidButton } from "../Common/Button";

import iconHome from "./asset/icon/home.svg";
import iconMoments from "./asset/icon/moments.svg";
import iconMessages from "./asset/icon/messages.svg";
import iconNotifications from "./asset/icon/notifications.svg";
import iconLogo from "./asset/icon/logo.svg";
import iconMagnifier from "./asset/icon/magnifier.svg";

const Wrapper = styled.div`
  background: white;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 45px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #667580;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  margin-right: 15px;
`;

const Icon = styled.img`
  margin-right: 4px;
`;

const LinkLogo = styled(Link)`
  max-height: 16px;
`;

const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 45px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 220px;
`;

const Field = styled.input`
  width: 100%;
  background: #f5f8fa;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;
  color: #687b8a;
  font-size: 12px;
  line-height: 16px;
  padding: 8px 32px 8px 12px;
`;

const Button = styled.button`
  background-color: transparent;
  height: 15px;
  width: 15px;
  border: 0;
  padding: 0;
  margin-left: -27px;
  cursor: pointer;
`;

const Avatar = styled.img`
  height: 26px;
  padding: 0 15px;
`;

export default function() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row between-lg middle-lg">
          <Navigation>
            <NavLink to="/">
              <Icon src={iconHome} />
              Home
            </NavLink>
            <NavLink to="/moments">
              <Icon src={iconMoments} />
              Momemnts
            </NavLink>
            <NavLink to="/notifications">
              <Icon src={iconNotifications} />
              Notifications
            </NavLink>
            <NavLink to="/messages">
              <Icon src={iconMessages} />
              Messages
            </NavLink>
          </Navigation>
          <LinkLogo to="/">
            <img src={iconLogo} alt="Logo" />
          </LinkLogo>
          <Search>
            <Form>
              <Field type="search" placeholder="Search Twitter" />
              <Button>
                <img src={iconMagnifier} alt="" />
              </Button>
            </Form>
            <Link to="/">
              <Avatar
                src={process.env.PUBLIC_URL + "img/avatar/everyinteract.jpg"}
              />
            </Link>
            <SolidButton>Tweet</SolidButton>
          </Search>
        </div>
      </div>
    </Wrapper>
  );
}
