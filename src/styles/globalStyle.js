import { createGlobalStyle } from "styled-components";
import Auto from '../assets/cursor-auto.png'
import Pointer from '../assets/cursor-pointer.png';
import Text from '../assets/cursor-text.png';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: "Montserrat", sans-serif;
}
body {
  background: ${({ theme }) => theme.bg};
  background-image: url(https://www.transparenttextures.com/patterns/cubes.png);
  height: 100vh;
  width: 100vw;
  cursor: url(${Auto}), auto;

}

footer {
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

footer p {
  color: #ccc;
}

.logo {
  position: center;
}
button {
    cursor: url(${Pointer}), pointer !important;
}
input, textarea {
    cursor: url(${Text}), text;
    }
`;
