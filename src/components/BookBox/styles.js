import styled from 'styled-components';

import { Mixins, Utils, Colors, Device } from './../../styles';

export const Container = styled.div`
  display: block;
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #1119;
  overflow-y: scroll;
  z-index: 300;
  ${props => 
    props.visible ?
      `
        top: 0;
        opacity: 1;
        ` :
      `
        top: -150%;
        opacity: 0;
    `
  }
`;

export const Main = styled.div`
  ${Mixins.AbsolutePositionCenter('45', '50')}; 
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 1rem #1114;
  display: flex;
  width: 500px;
  height: 300px;

  > div {
    width: 50%;
    padding: 1rem;

    &.house {
      h1 {
        text-align: center;
      }

      .img {
        ${props => Mixins.BGImage(props.BG)};
        height: 200px;
        width: 100%;
      }

      p {
        font-size: 1.2rem;
      }

    }

    &.input {
      ${Mixins.FlexAlign('sa', 'c', 'c')}; 

      label {
        font-weight: bold;
        font-size: 1.5rem;
        margin-left: 1rem; 
      }

      input {
        border-bottom: 2px solid transparent;
        box-shadow: 0 0 .1rem #1113;
        ${Utils.SmoothTransition};
        padding: .4rem .8rem;
        border-radius: 5px;
        font-size: 1.5rem;
        outline: none;
        border: none;

        &:focus {
          border-color: orange;
        }
      }

      .btns {

        button {
          background: ${Colors.dark_color};
          padding: 1rem 2rem;
          text-align: center;
          border-radius: 5px;
          font-weight: bold;
          margin: 0 .2rem;
          cursor: pointer;
          border: none;
          color: #fff;

          &.cancel {
            background: #D04;
          }
        } 
      }
    }
  }

  @media ${Device.tabletM} {
    top: 50%;
    flex-wrap: wrap;
    width: 98%;
    max-width: 300px;
    height: auto;
    overflow-y: scroll;
    z-index: 300;

    > div {
      width: 100%;
      text-align: center;

      input {
        display: block;
        margin: .5rem auto;
      }
    }
  }
`;
