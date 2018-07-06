import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.section`
  margin-top: 10px;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 15px;
  line-height: 22px;
`;

const Preview = styled.img`
  max-width: 126px;
  max-height: 126px;
  position: absolute;
`;

const TextWrapper = styled.div`
  margin-left: 126px;
  padding: 10px 0 10px 10px;
`;

const Title = styled.h2`
  font-size: 15px;
  margin: 0;
`;

const Anons = styled.div``;

const SourceLink = styled.span`
  color: #788a98;
`;

export default props => {
  if (!props.card) {
    return null;
  }

  return (
    <CardWrapper>
      <CardLink to={props.card.source}>
        <Preview src={props.card.image} alt="" />
        <TextWrapper>
          <Title>{props.card.header}</Title>
          <Anons>{props.card.text}</Anons>
          <SourceLink>{props.card.source}</SourceLink>
        </TextWrapper>
      </CardLink>
    </CardWrapper>
  );
};
