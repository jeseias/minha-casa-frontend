import styled from 'styled-components';

import { Utils, Mixins, Colors } from './../../styles';

export const Container = styled.div`
  box-shadow: 0 0 1rem #1113;
  ${Utils.SmoothTransition}
  padding-bottom: 7rem;
  position: relative;
  border-radius: 5px; 
  text-align: center;
  min-height: 300px;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 1.2rem #1116;

    .img {
      opacity: .8;
      cursor: pointer;
    }
  }

  .img {
    ${props => Mixins.BGImage(props.BG)} 
    ${Utils.SmoothTransition}; 
    height: 170px;  
    width: 100%;
  }

  .content {

    .location {
      color: ${Colors.dark_color};
      margin: 2rem auto 1rem auto;
      font-weight: bold;
      font-size: 1.8rem;
    }

    .t {
      margin-bottom: .5rem;
    }

    .location_long {
      width: 60%;
      margin: 0 auto;
      margin-bottom: .5rem;
    }

    button {
      border: 2px solid ${Colors.brown};
      transform: translateX(-50%);
      text-transform: uppercase;
      ${Utils.SmoothTransition}
      margin: 4rem auto 0 auto;
      background: transparent;
      color: ${Colors.brown};
      padding: .8rem 1.6rem;
      border-radius: 5px;
      position: absolute;
      font-size: 1.3rem;
      font-weight: bold;
      display: block;
      bottom: 1em;
      left: 50%;
    }
  }
`;