import React from "react";
import styled from "styled-components";

const Cover = styled.section.attrs({})`
  background-color: ${props => props.color || "transparent"};
  position: relative;
  overflow: hidden;
  height: 460px;
`;

const Background = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
`;

export default props => {
  return (
    <Cover color={props.background.color || null}>
      {props.background.src ? <Background src={props.background.src} /> : null}
    </Cover>
  );
};
