import styled from 'styled-components';

import { Utils, Mixins, Colors } from './../../../styles';

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 1rem;
  }

  .addHouse {
    ${Utils.CenterElements};
    position: fixed;
    bottom: 6rem;
    right: 2rem; 
    padding: .9rem;
    background: #1117;
    box-shadow: .3rem .3rem .5rem rgba(0,0,0, .5);
    border-radius: 100%;

    svg {
      color: #fff; 
    }
  }
`;

export const DLE = styled.div`
  ${Mixins.AbsolutePositionCenter('50', '50')};
  box-shadow: 0 0 15rem rgba(25,0,0, .6);
  ${Utils.SmoothTransition};
  border-radius: .5rem;
  position: fixed; 
  padding: .5rem 2rem;
  background: #fff;
  margin: 0 auto;
  width: 90%;

  ${props => props.visible ? `
      top: 40%; 
    ` :
    `
      top: -150%;
    `
  }

  ${Mixins.FlexAlign('sb', 'c', 'c')}; 

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .btns {
    ${Mixins.FlexAlign('sb', 'c', '')};  

    > div {
      padding: .5rem 1rem;
      color: #fff;
      border-radius: .5rem;
      width: 70px;
      text-align: center;
      margin: 0 1rem;

      &.delete {
        background: #0029;
      }

      &.cancel {
        background: #D00;
      }
    }
  }
`;

export const Preview = styled.div`
  ${props => Mixins.BGImage(props.BG)};
  min-width: 100%;
  min-height: 80px;
  z-index: 11;
`;

export const AddHouse = styled.div`
  ${props => props.display ? `
      top: 0;
    ` 
    : `
      top: -150%;
    `
  }
  ${Utils.SmoothTransition};
  background: ${Colors.dark_color};
  position: fixed;
  width: 100vw;
  height: 100vh; 
  z-index: 100;
  overflow: scroll;

  .img {
    display: block;
    margin: 3rem auto 0 auto;
    position: relative;
    width: 80%;
    height: 100px;

    ${props =>
      props.BG.length === 0 ?
        `
          border: 2px dashed rgba(255,255,255, .1); 
        `
          :
        ` 
          height: 10px;

          input {
            height: 10px;
          }

          .allImages {
            opacity: 1;
            z-index: 11;  
            background: pink;
          }
      `
    }

    input {
      display: block;
      width: 100%;
      height: 100px;
      opacity: 0;
      z-index: 10;
    }

    svg {
      ${Mixins.AbsolutePositionCenter('50', '50')}; 
      z-index: -1;
      color: #fff;
    }
  }

  .allImages {
      opacity: 1;
      display: grid;
      grid-gap: .4rem;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      width: 100%;
      height: auto;
      margin: 1rem auto;
      padding: .5rem; 
      z-index: 1; 
  }

  .inputs {

    input, select, textarea {
      display: block;
      margin: 1rem auto;
      border: none;
      width: 90%;
      padding: .3rem .7rem;
      outline: none;
      border-bottom: 2px solid transparent;

      &:focus {
        border-color: #333;
      }
    }

    textarea {
      height: 78px;
    }
  }
  
  .config {
    ${Mixins.FlexAlign('c', 'c', '')}; 
  }

  button {
    display: inline-block;
    margin: 1rem;
    border: 0;
    padding: 1rem 2rem;
  }
`;

export const HousesContainer = styled.main`
`;

export const House = styled.div`
  margin: 1rem auto;
  width: 95%;

  &:last-child {
    margin-bottom: 8rem;
  }

  .img {
    ${props => Mixins.BGImage(props.BG)}; 
    width: 100%;
    height: 200px;
    border-radius: 2px;
    margin: .5rem auto;
  }

  .bottom {
    ${Mixins.FlexAlign('sb', 'c', '')}; 

    > div {
      width: auto;

      &.details {
        text-align: left;
        
        .location {

        }
      }

      &.config {
        ${Mixins.FlexAlign('sb', 'c', 'c')};  
        text-align: right;
      }
    }
  }
`;

export const NoHouse = styled.p`
  width: 90%;
  margin: 40% auto;
  font-size: 2rem;
  text-align: center;
`