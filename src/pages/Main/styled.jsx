import styled, { css } from "styled-components";

const WikiTitle = styled.h1`
  font-size: 1.5rem;
  margin-left: 2rem;
`;

const Header = styled.header`
  padding: 0.5rem;
  background-color: #b7b8b65c;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const AddBtn = styled.button`
  background-color: transparent;
  border-radius: 1rem;
  margin-top: -2rem;
  margin-right: 1rem;
  right: 0;
  position: absolute;
  border: none;
  background-color: #61dbfb;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: white;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 60%;
  height: 70vh;
  padding: 45px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  input,
  textarea {
    display: block;
    width: 98%;
    padding: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;

    &:focus {
      outline: none;
      border-color: #0074d9;
    }
  }
  input {
    height: 10%;
  }
  textarea {
    height: 70%;
  }

  button {
    display: inline-block;
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #0074d9;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #0063b1;
    }
  }
`;

export { WikiTitle, Header, AddBtn, ModalContainer, ModalContent };
