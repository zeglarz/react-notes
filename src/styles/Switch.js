import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSwitch = styled(motion.div)`
  width: 55px;
  height: 31px;
  background-image: ${({ theme }) =>
    theme.primary !== "#eee"
      ? "url('https://i.etsystatic.com/11598164/r/il/0daf56/933217164/il_570xN.933217164_htw0.jpg')"
      : ""};
  background-color: rgba(255, 255, 255, 0.4);
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 3.2px;
  cursor: pointer;
  margin: 0 20px;

  &[data-isOn="true"] {
    justify-content: flex-end;
  }

  & div {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 40px;
  }
  & svg {
    color: ${({ theme }) => theme.secondary};
  }
`;
