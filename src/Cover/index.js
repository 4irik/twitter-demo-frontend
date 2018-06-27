import React from "react";
import styled from "styled-components";

const Cover = styled.section`
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

export default function() {
  return (
    <Cover>
      <Background src={process.env.PUBLIC_URL + "img/profile-image.jpg"} />
    </Cover>
  );
}
