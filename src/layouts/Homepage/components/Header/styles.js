import styled from 'styled-components';

import { Colors, Utils, Mixins, Device } from './../../../../styles';

export const Container = styled.div`
`;

export const Main = styled.header` 
  ${props => Mixins.BGImage(props.BG)};
  height: 500px; 
  ${Mixins.FlexAlign('', 'c', 'c')}; 
  position: relative;

  &::before {
    background: rgba(109, 87, 89, .3);
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    content: "";
    z-index: 1;
    left: 0;
    top: 0;
  } 

  * {
    z-index: 10;
  }

  h1 {
    font-size: 6rem;
    color: #fff;
    text-shadow: 0 .3rem 1rem rgba(0,0,0, .4);
    font-weight: bold;
    margin: 10rem auto 0 auto;
  }

  p {
    text-shadow: 0 .3rem 3rem rgba(0,0,0, 1);
    margin: 1rem auto 5rem auto;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;

    a:link, a:active, a:visited {
      color: #fff;

      &:hover {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  div {
    input {
      border: none;
      border-bottom: 5px solid transparent;
      background: ${Colors.dark_color};
      color: ${Colors.light_bg};
      ${Utils.SmoothTransition};
      padding: .8rem 2rem .3rem;
      border-radius: 5px;
      font-size: 1.7rem;
      outline: none;
      width: 500px;
      height: 60px;

      &:focus {
        border-color: ${Colors.light_bg};  
      }
    }
  }

  @media ${Device.laptop} {
    text-align: center;

    h1 {
      font-size: 5rem;
      padding: 2rem;
    } 

    p {
      padding: 1rem;
    }
  }

  @media ${Device.tablet} {
    h1 {
      margin-top: 6rem;
    }

    div {
      input {
        width: 380px;
      }
    }
  }

  @media ${Device.tabletM} {
    p {
      margin-bottom: 1rem;
    }

    div {
      input {
        width: 95%;
      }

    } 
  }

`;

export const SearchBox = styled.div`
  box-shadow: 0 0 .5rem rgba(0,0,0, .5);
  background: ${Colors.dark_color};
  ${Utils.SmoothTransition};
  border-radius: 10px;
  transform: scale(0);
  position: absolute;
  overflow-y: scroll;
  max-height: 270px;
  max-width: 750px;
  display: block;
  padding: 1rem;
  z-index: 10;
  opacity: 0;
  left: 50%;
  ${props => 
    props.visible ?
      `
        position: relative;
        bottom: 0;
        transform: translate(-50%, 2%) scale(1); 
        opacity: 1;
      ` :
      `
        transform: scale(0); 
      `
  } 

  > div:last-child {
    border-bottom: none;
  }
`;

export const HomeBox = styled.div`
  color: ${Colors.dark_color};
  ${Utils.SmoothTransition};
  padding-bottom: .8rem;
  margin-bottom: .8rem;
  display: flex; 
  color: #fff;

  .img {
    ${props => Mixins.BGImage(props.BG)};
    ${Utils.SmoothTransition};
    border: 1px solid #fff;
    border-radius: 100%;
    height: 90px;
    width: 90px;
    margin-right: 1rem;
  }

  &:hover .img {
    opacity: .8;
  }

  .details {
    ${Mixins.FlexAlign('sb', 's','c')};
    width: calc(100% - 80px);
    padding: 0 .7rem; 

    svg {
      color: ${Colors.light_brown};
      ${Mixins.MoveElement('2px')};
      margin-right: .5rem;
    }

    .location {
      color: ${Colors.light_bg};
      ${Utils.SmoothTransition};
      text-decoration: underline;
      font-weight: bold;
      font-size: 1.5rem;
      cursor: pointer; 

      &:hover {
        color: ${Colors.light_brown};
      }
    }
  } 

  @media ${Device.mobileL} {
    justify-content: space-around;
    padding: 1rem;

    .details {
      
      * {
        text-align: right;
        align-self: flex-end;
      }

      div {
        padding-right: 1rem;
        position: relative;

        &.location {
          padding-right: 0;
          ${Mixins.MoveElement('', '2px')};
        }

        svg {
          ${Mixins.PositionAbsolute('10')};
          right: -1rem;
        }

      }
    }
  }
`;