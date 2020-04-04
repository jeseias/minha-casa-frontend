import styled from 'styled-components';

import { Colors, Mixins, Utils, Device } from './../../styles';

export const Container = styled.div`
  position: relative;
  max-width: 100vw;
  width: 100%; 

  .nav-bar {
    display: none;
  }

  @media ${Device.tabletM} {
    position: fixed;
    z-index: 200;
    padding: 0;
    left: 0;
    top: 0;
  }
`;

export const Top = styled.div`
  ${Mixins.FlexAlign('sb', 'c', '')};
  background: ${Colors.light_brown};
  ${Utils.SmoothTransition};
  padding: .3rem 10rem;
  color: #fff;

  * {
    display: inline-block;
  }

  img {
    width: 60px;
  }

  svg {
    ${Mixins.MoveElement('3px')}
    margin-right: .5rem;
    color: ${Colors.dark_color};
  }

  p {
    margin: 0 1rem;
    font-weight: bold;
    position: relative;
    font-size: 1.1rem;
    ${Mixins.MoveElement('-4px')}

  }

  @media ${Device.tablet} {
    padding: 0 4rem; 

    svg {
      margin: 0;
    }
  } 

  @media ${Device.tabletM} {
    ${Utils.SmoothTransition};
    background: transparent;
    position: fixed;
    display: block;
    z-index: 201;
    bottom: 20%;
    width: 65vw;
    padding: 0 0 0 2.2rem;

    ${props => props.visible ? 
      `left: 0` :
      `left: -150%`
    };
    
    img {
      display: block;
    }

    svg {
      color: ${Colors.light_brown};
      margin: 1rem; 
    }

    p {
      top: -2px;
      margin: 0;
      svg {
        margin: 0 .5rem .3rem 1px;
        top: 6px;
      }
    }

    > div:nth-child(2) {

      svg:nth-child(1) {
        margin-left: 0;
      }
    }
  } 
`;

export const Navigator = styled.div`
  ${Mixins.FlexAlign('sa', 'c', '')};
  background: ${Colors.dark_color};
  padding: 1rem 6rem; 

  img {
    width: 170px;
  }

  nav ul {
    list-style: none;
    margin: 0;

    a:link, a:active, a:visited {
      text-decoration: none;
      color: #fff;
      font-size: 1.3rem;
      padding: 1rem 2rem;
      text-align: center;
      ${Utils.SmoothTransition};
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #fff;
        cursor: pointer;
      }
    }
  }

  @media ${Device.tablet} {
    padding: 1rem 2rem;
  } 
  @media ${Device.tabletM} {
    padding: 1rem 0;

    img {
      ${Mixins.MoveElement('' ,'-90px')};
      margin: 0;
    }

    .nav-bar {
      display: block;
      position: absolute;
      top: 28px;
      right: 28px;
      color: #fff;
    }

    nav {
      ${Mixins.FlexAlign('s', 's', 'r')};
      background: ${Colors.dark_color};
      box-shadow: 1rem 0 2rem #112;
      ${Utils.SmoothTransition}; 
      position: absolute;
      padding: 2rem;
      height: 100vh;
      z-index: 100;
      width: 77vw;
      top: 0;

      ${props => props.visible ? 
        `left: 0` :
        `left: -150%`
      };

      ul {
        padding-top: 2.5rem;

        &::before {
          display: block;
          content: "Menu";
          font-size: 2rem;
          color: #fff;
          font-weight: bold;
          width: 100%;
          margin-bottom: 2rem;
        }

        a:link, a:active, a:visited {
          display: block;
          padding: 1rem 0;
          text-align: left;
        }
      }

    }
  }

  @media (max-width: 350px) {
    img {
      margin: 0;
      ${Mixins.MoveElement('', '-70px')}
    }
  }

  @media ${Device.mobileS} {
    img {
      ${Mixins.MoveElement('' ,'-60px')};
      margin: 0;
    }
  }
`;
