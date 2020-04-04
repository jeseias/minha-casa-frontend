import styled from 'styled-components';

import { Colors, Mixins } from './../../../styles';

export const Container = styled.div`
  padding: 4rem .5rem;

  h1 {
    text-align: center;
  }

  main {
    padding: 1rem;
  }
`;

export const ReservaBox = styled.div`
  background: ${Colors.dark_color};
  margin-bottom: 1rem;
  width: 100%;
  color: #fff;

  .img {
    ${props =>  Mixins.BGImage(props.BG)};
    margin-bottom: .5rem;
    height: 270px;
    width: 100%;
  }

  .content {
    padding: 1rem 2rem;

    p {
      svg {
        color: ${Colors.light_brown};
        ${Mixins.MoveElement('3px')};
        margin-right: .5rem;
      }
    }
  }

  .config  {
    border-top: 2px solid #333;
    padding: 1rem;

    button {
      padding: 1rem 2rem;
      border-radius: 4px;
      background: #D04;
      margin: 0 auto;
      display: block;
      border: none;
      color: #fff;
    }
  }
`;
