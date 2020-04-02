import styled from 'styled-components';

import { Colors, Mixins, Utils } from './../../styles';

export const Container = styled.div`
  
`;

export const Top = styled.div`
  background: ${Colors.light_brown};
  ${Mixins.FlexAlign('s', 'c', '')};
  ${Utils.SmoothTransition};
  padding: .3rem 10rem;
  color: #fff;

  img {
    width: 60px;
  }

  p {
    margin: 0 1rem;
    font-weight: bold;
    position: relative;
    font-size: 1.1rem;

    svg {
      margin-right: .5rem;
      ${Mixins.MoveElement('2px')}
      color: ${Colors.dark_color};
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
`;
