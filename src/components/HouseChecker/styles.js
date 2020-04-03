import styled from 'styled-components';

import { Mixins, Utils, Device } from './../../styles';

export const Container = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #1119;
  z-index: 250;
  overflow-y: scroll;
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

export const HouseBox = styled.div`
  ${Mixins.PositionAbsolute('43', '50')} ;
  box-shadow: 0 0 1rem #1111;
  border-radius: 10px;
  background: #fff;
  max-width: 950px;
  overflow: hidden;
  height: 570px;
  display: flex;
  width: 100%;

  .img {
    ${props => Mixins.BGImage(props.BG)}
    display: block;
    height: 100%; 
    width: 65%;

    .close {
      ${Utils.SmoothTransition};
      border-radius: 100%;
      position: absolute;
      background: #D05;
      left: 1.5rem;
      color: #fff;
      z-index: 50;
      top: 1rem;

      &:hover {
        cursor: pointer;
        background: #fff;
        color: #D05;
      }
    }
  }

  .content { 
    width: 35%;
    display: flex;
    flex-direction: column;
    position: relative;

    > div {
      width: 100%;
    }

    .images {
      grid-template-columns: repeat(auto-fill, minmax(100px, 400px)); 
      display: grid;
      height: 70%;
    }

    .details {
      overflow-y: scroll;
      padding: 1rem;
      height: 30%;

      h2 {
        margin-bottom: 1rem; 
      }

      p {

        svg {
          display: inline-block;
          margin-right: 1rem;
        }
      }

      button {
        display: block;
        border: none;
        border-radius: 5px;
        padding: .5rem 2rem;
        margin: 1rem auto;
        font-size: 1.7rem;
        ${Utils.SmoothTransition};

        &:hover {
          background: orange;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  @media ${Device.laptop} {
    ${Mixins.PositionAbsolute('50', '50')};
    max-width: 768px;
    height: 500px;
  }

  @media ${Device.tablet} {
    ${Mixins.PositionAbsolute('50', '50')};
    max-width: 545px;
    height: 400px;
  }

  @media ${Device.tabletM} {
    ${Mixins.PositionAbsolute('55', '50')};
    overflow-y: scroll;
    display: block;
    height: auto;
    z-index: 250;
    width: 90%;

    > div {
      width: 100%;

      &.img {
        height: 270px;
        width: 100%;
      }

      &.content {
        display: flex;
        width: 100%;

        .images {
          width: 100%;
          grid-template-columns: repeat(auto-fill,minmax(50px, 600px));
          height: 200px;
        }

        .details {
          width: 100%;
        }
      }
    }
  }
`;

export const IMG = styled.div`
  ${props => Mixins.BGImage(props.BG)};
  ${Utils.SmoothTransition};
  filter: blur(1px);
  cursor: pointer;
  display: block;

  &:hover {
    opacity: .8;
    filter: blur(0);
  }
`;