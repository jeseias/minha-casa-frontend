import styled from 'styled-components';

import { Colors, Mixins } from './../../styles';

export const Container = styled.div`
  background: ${Colors.dark_brown};
  ${Mixins.FlexAlign('sa', 'c', '')}; 
  padding: 2rem; 
  color: #aaa;

  a:link, a:active, a:visited {
    display: inline-block;
    color: #aaa;
    text-decoration: none;
    font-size: 1.3rem;
    padding: .4rem .6rem;
    margin-top: .5rem;
  }

  div:nth-child(1) {

    span {
      padding: .3rem .7rem;

      svg {
        ${Mixins.MoveElement('3px')};
        margin-right: .5rem;
      }
    }

  }
`;
