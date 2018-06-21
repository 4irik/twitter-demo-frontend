import styled from "styled-components";

export const SolidButton = styled.button`
  border-radius: 100px;
  box-shadow: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  border-style: solid;
  border-width: 1px;
  background-color: #1da1f2;
  color: white;
`;

export const HollowButton = SolidButton.extend`
  color: #1da1f2;
  background-color: #fff;
`;
