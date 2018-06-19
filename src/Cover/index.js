import React from "react";
import styled from "styled-components";

const Cover = styled.section`
  position: relative;
  overflow: hidden;
  height: 280px;
  @media (min-width: 1100px) {
    height: 300px;
  }
  @media (min-width: 1200px) {
    height: 320px;
  }
  @media (min-width: 1370px) {
    height: 360px;
  }
  @media (min-width: 1450px) {
    height: 380px;
  }
  @media (min-width: 1510px) {
    height: 420px;
  }
  @media (min-width: 1670px) {
    height: 460px;
  }
  @media (min-width: 1820px) {
    height: 460px;
  }
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
