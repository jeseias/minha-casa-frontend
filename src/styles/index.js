import { createGlobalStyle } from 'styled-components';

import { dark_color, light_brown, dark_brown, light_bg, greenish, brown } from  './colors';
import { FlexAlign, MoveElement, BGImage } from './mixins';
import { SmoothTransition } from './utils';

export const Colors = {
  dark_color,
  light_brown,
  dark_brown,
  light_bg,
  greenish,
  brown
}

export const Mixins = {
  FlexAlign,
  MoveElement,
  BGImage
}

export const Utils = {
  SmoothTransition
}

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Acme|Alegreya:400,700|Baskervville|Pontano+Sans&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  html {
    font-size: 12px;
  }

  body, input, button {
    font-family: 'Pontano Sans', Arial;
  }
`;
