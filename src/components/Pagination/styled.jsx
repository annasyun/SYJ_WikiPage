import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin: 0;
  background: transparent;
  color: black;
  font-size: 1rem;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    color: transparent;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export { Nav, Button };
