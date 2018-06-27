import React from "react";
import styled from "styled-components";

import iconPinned from "./asset/icon/pinned.svg";

const Context = styled.div`
  display: flex;
  align-items: center;
  margin-left: -22px;
`;

const ContextIcon = styled.img`
  height: 12px;
  margin-right: 10px;
`;

const ContextHint = styled.span`
  color: #707e88;
  font-size: 12px;
`;

export default props => {
  if (!props.isPinned) {
    return null;
  }

  return (
    <Context>
      <ContextIcon src={iconPinned} alt="" />
      <ContextHint>Pinned Tweet</ContextHint>
    </Context>
  );
};
