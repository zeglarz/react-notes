import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.header};
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    color: ${({ theme }) => theme.primary};
    font-family: "McLaren", cursive;
    font-weight: 200;
  }
`;
