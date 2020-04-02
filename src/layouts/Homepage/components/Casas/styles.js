import styled from 'styled-components';

import { Colors, Utils } from './../../../../styles';  
 
export  const Container = styled.div`
  border-bottom: 4px solid #1111;
  max-width: 1280px;
  padding: 4rem 0;
  margin: 0 auto;

  main {
    
    h1 {
      color: ${Colors.dark_color};
      text-align: center;
      font-size: 3rem;  
      margin-top: 1rem;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px,auto));
      grid-gap: 2.5rem;
      padding-top: 3rem;
    }

    button {
      background: ${Colors.dark_color};
      ${Utils.SmoothTransition}
      margin: 4rem auto 0 auto;
      padding: 1rem 2rem;
      border-radius: 5px;
      font-size: 1.5rem;
      display: block;
      border: none;
      color: #fff;


      &:hover {
        background: #1111;
        cursor: pointer;
        color: #333;
      }

      a:link, a:active, a:visited {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

export const Ad = styled.div`
  width: 100%;
  height: 150px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 auto;
    width: 70%;
    height: 90%;
    background: #1117;
  }
`;