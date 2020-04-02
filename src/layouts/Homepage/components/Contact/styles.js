import styled from 'styled-components';

import { Colors, Mixins, Utils } from './../../../../styles';

export const Container = styled.div`
  background: ${Colors.light_bg};

  h1 {
    color: ${Colors.dark_color};
    text-align: center;
    font-size: 3rem;
  }
`;

export const ContactBox = styled.div`
  padding: 3rem;
  width: 100%;

  main {
    box-shadow: 0 0 4rem #1114;
    margin: 5rem auto;
    display: flex;
    width: 75%;
    
    > div {
      width: 50%;

      &.img {
        ${props => Mixins.BGImage(props.BG)};
      }

      &.details {
        background: #fff; 
        padding: 1rem;

        input, select, textarea {
          border: none;
          box-shadow: 0 0 .1rem #3339;
          display: block;
          width: 90%;
          margin: 2rem auto;
          padding: .4rem .9rem;
          font-size: 1.3rem;
          border-radius: .3rem;
        }

        textarea {
          height: 200px;
        }

        button {
          padding: 1rem 2rem;
          border: none;
          display: block;
          margin: 0 auto;
          font-size: 1.rem;
          border-radius: 10px;
          font-weight: bold;
          ${Utils.SmoothTransition};
          outline: none;

          &:hover {
            background: ${Colors.dark_brown};
            cursor: pointer;
            color: #fff;
          }
        }
      }
    }
  }
`;
