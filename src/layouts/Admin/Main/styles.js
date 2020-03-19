import styled from 'styled-components';

import { CenterElements } from './../../../styles/utils';

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 1rem;
  }

  .addHouse {
    ${CenterElements};
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
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: 0 auto;
  padding: .5rem 2rem;
  background: #fff;
  box-shadow: 0 0 15rem rgba(25,0,0, .6);
  border-radius: .5rem;
  transition: All ease-in-out .3s;

  ${props => props.visible ? `
      top: 40%; 
    ` :
    `
      top: -150%;
    `
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;

    >div {
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
  background: ${props => `url(${props.BG})`};
  background-size: cover;
  background-position: center;
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
  background: #111;
  transition: All ease-in-out .3s;
  position: fixed;
  width: 100vw;
  height: 100vh; 
  z-index: 100;

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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    display: inline-block;
    margin: 1rem;
    border: 0;
    padding: 1rem 2rem;
  }
`;

export const HousesContainer = styled.main`
  background: #1111;
  padding: 1rem auto 10rem auto;
`;

export const House = styled.div`

  .img {
    background: ${props => `url(${props.BG})`};
    background-position: center;
    background-size: cover;
    width: 90%;
    height: 150px;
    border-radius: 2px;
    margin: .5rem auto;
  }
`;
