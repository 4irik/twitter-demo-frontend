import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
`;

const Follow = styled.div`
  display: flex;
`;

export default function() {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-xs-offset-4 col-xs-4">
          <Menu>ьутг</Menu>
        </div>
        <div className="col-xs-2">кнопка</div>
      </div>
    </Wrapper>
  );
}
