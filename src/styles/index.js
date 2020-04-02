import { createGlobalStyle } from 'styled-components';

import { dark_color, light_brown, dark_brown, light_bg, greenish, brown } from  './colors';
import { FlexAlign, MoveElement, BGImage, PositionAbsolute } from './mixins';
import { SmoothTransition, CenterElements, AbsoluteCenter } from './utils';
import { device } from './device';

export const Device = device;

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
  BGImage,
  PositionAbsolute
}

export const Utils = {
  SmoothTransition,
  CenterElements,
  AbsoluteCenter
}

export default createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root { 
    width: 100vw;
    overflow-x: hidden;
  }

  html {
    font-size: 12px;
  }

  body, input, button {
    font-family: 'Pontano Sans', Arial;
  }
`;
