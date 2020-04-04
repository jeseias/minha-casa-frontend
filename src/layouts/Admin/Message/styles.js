import styled from 'styled-components';

import { Colors, Utils, Mixins } from './../../../styles';

export const Container = styled.div`
  padding-bottom: 4rem;
  
  header {

    h1 {
      text-align: center;
      margin: 1rem;
    }

    p {
      font-weight: bold;
      margin: 1rem;
    }
  }

  main {
    padding: 2rem 1rem;
  }
`;

export const DLE = styled.div`
  ${Mixins.AbsolutePositionCenter('50', '50')}
  box-shadow: 0 0 15rem rgba(25,0,0, .6);
  ${Utils.SmoothTransition};
  border-radius: .5rem;
  padding: .5rem 2rem;
  background: #fff;
  position: fixed; 
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
        background: ${Colors.dark_color};
      }

      &.cancel {
        background: #D04;
      }
    }
  }
`;

export const MensageBox = styled.div`
  box-shadow: 0 0 .3rem rgba(0,0,0, .2);
  padding: .3rem;
  margin-bottom: 1rem;
  ${props => props.done ? `
      border-left: 4px solid green;
    ` :
    `
      border-left: 4px solid #D00;
    `
  }

  > * {
    margin: .6rem;
  }

  .details {
    .name {
      font-size: 2rem;
      font-weight: bold;
    }

    .message {
      background: #f4f4f4;
      padding: 1rem;
      border-radius: .3rem;
      margin: .5rem auto;
    }

    .type {
      font-weight: bold;
      text-decoration: undeline;
    }
  }

  .config {
    ${Mixins.FlexAlign('sa', 'c', '')};  
    border-radius: .4rem;
    padding: 1rem .3rem;
    background: #333;
    margin-top: 1rem;
    color: #f4f4f4;

    > div {
      ${Mixins.FlexAlign('sb', 'c', '')};  

      svg {
        margin-right: .5rem;
      }
    }
  }
`;
