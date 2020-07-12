import styled from 'styled-components';

import { Colors, Mixins, Utils } from './../../../styles'; 

export const Container = styled.div`
  background: ${Colors.dark_color}; 
  ${Utils.CenterElements};
  width: 100vw;
  height: 100vh; 

  img {
    width: 300px;
    margin-bottom: 1.4rem;
    ${Mixins.MoveElement('-60px')};
  }

  main {
    ${Mixins.MoveElement('-50px')};
    width: 100%; 
    padding: .5rem;
    border-radius: 1rem;
    text-align: center;
    color: #fff;


    input {
      width: 90%;
      padding: .5rem 1rem;
      border: none;
      margin: .5rem auto;
    }
  }
`;
