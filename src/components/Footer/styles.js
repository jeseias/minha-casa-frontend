import styled from 'styled-components';

import { Colors, Mixins, Device } from './../../styles';

export const Container = styled.div`
  background: ${Colors.dark_color};
  color: #aaa;

  > div {
    ${Mixins.FlexAlign('sa', 'c', '')}; 
    padding: 3rem;
  }

  .top {
    border-radius: 2px solid #000;
    width: 100%;
  }

  .flexbox {

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
  }

  @media ${Device.tablet} {

    .flexbox {
      display: block;
      text-align: center;

      div:nth-child(1) {
        margin-bottom: 2rem;
      }
    }
  }

  @media ${Device.mobileL} {

    .flexbox {
       

      div:nth-child(1) {
       
       span {
         display: block;
       }
      }
    }
  }
  
`;
