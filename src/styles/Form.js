import styled from "styled-components";

export const StyledForm = styled.div`
  position: relative;
  width: 480px;
  margin: 30px auto 20px auto;
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.secondaryDark};
  padding: 15px;
  border-radius: 7px;
  box-shadow: 0 1px 5px rgb(138, 137, 137);

  & input {
    font-weight: bold;
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    font-style: italic;
    background: inherit;
    color: inherit;
  }

  & textarea {
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.1em;
    font-family: inherit;
    resize: none;
    background: inherit;
    color: inherit;
  }
  & button {
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: ${({ theme }) => theme.primaryDark};
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
  }
`;
