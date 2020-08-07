import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNote = styled(motion.div)`
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.secondaryDark};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 10px;
  width: 240px;
  margin: 16px;
  float: left;
  z-index: 0;
  position: relative;

  & h1 {
    font-size: 1.1em;
    margin-bottom: 6px;
  }
  & p {
    font-size: 1em;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  & button {
    position: relative;
    float: right;
    color: #f5ba13;
    width: 36px;
    height: 36px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
