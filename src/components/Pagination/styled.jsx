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
  padding: 8px;
  margin: 0;
  background: #9fc4e7;
  color: white;
  font-size: 1rem;

  &:hover {
    background: #3366cc;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: #ebecf0;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #3366cc;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export { Nav, Button };
