import React from "react";
import styled, { css } from "styled-components";

const Content = styled.p`
  display: block;
  width: 90%;
  height: 50vh;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #c4d9ea;
`;

const ItemContent = ({ content }) => {
  return <Content>{content}</Content>;
};

export default ItemContent;
