import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Acme|Alegreya:400,700|Baskervville|Pontano+Sans&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  html {
    font-size: 12px;
  }

  body, input, button {
    font-family: 'Pontano Sans', Arial;
  }
`;