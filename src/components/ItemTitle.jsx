import React from "react";
import styled, { css } from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  display: block;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-color: #0074d9;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const ItemTitle = ({ id, title }) => {
  return <Title id={id}>{title}</Title>;
};

export default ItemTitle;
