import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default props => {
  return (
    <AutorLink to={"/" + props.autor.account}>
      <Avatar src={props.autor.avatar} alt="" />
      <AutorName>{props.autor.name}</AutorName>{" "}
      <AutorAccount>@{props.autor.account}</AutorAccount> •{" "}
      <CreateTime>{props.createdAt}</CreateTime>
    </AutorLink>
  );
};
