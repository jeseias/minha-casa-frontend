import styled from 'styled-components';

import { Colors, Mixins, Device } from './../../../../styles';

export const Container = styled.div`
  background: ${Colors.dark_brown};
  padding: 2rem 5rem;

  .top {
    margin: 3rem auto 1rem auto;
    text-align: center;

    h1 {
      font-size: 3rem;
      margin-bottom: .3rem;
      color: #fff;
    }

    p {
      font-weight: bold;
      color: #777;
    }
  } 

  .ad {
    background: #1117;
    height: 100%;
    width: 100%;

    &.bottom {
      width: 60%;
      margin: 3rem auto;
      height: 130px;
    }
  }

  @media ${Device.laptop} {
    padding: 2rem;
  }

  @media ${Device.mobileL} {
    padding: 2rem 1rem;
  }

  @media ${Device.mobileM} {
    padding: 2rem 0;
  }
`;

export const Main = styled.div`
  grid-template-columns: 150px auto 150px;
  display: grid;
  padding: 0 1rem;
  grid-gap: 1rem;
  margin-top: 4rem;


  .content {
    display: block;

    > div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      &:nth-child(1) {
        .img {
          ${props => Mixins.BGImage(props.BG)};
          height: 300px;
        }
      }
      &:nth-child(2) {
        .img {
          ${props => Mixins.BGImage(props.BG1)};
          height: 300px;
        }
      }
      &:nth-child(3) {
        .img {
          ${props => Mixins.BGImage(props.BG2)};
          height: 300px;
        }
      }


      > div {
        width: 50%; 
      }

      .details {
        ${Mixins.FlexAlign('c', 'c', '')};   
        background: #fff;

        > div {
          width: 75%;

          h1 {
            color: ${Colors.dark_brown};
            margin-bottom: .5rem;
            font-size: 2.5rem;
          }

          p {
            color: #111;
            font-size: 1.1rem;
          }

        }
      }
    }
  }

  @media ${Device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 150px auto 150px;
    padding: 0 3rem;
  }

  @media ${Device.tablet} { 
    padding: 0 2rem;
  }

  @media ${Device.mobileL} { 
    padding: 0 1rem;

    .content {

      > div {

        .details {
          ${Mixins.FlexAlign('c', 'c', '')};   
          background: #fff;

          > div {
            width: 100%;
            padding: .5rem;  
          }
        }
      }
    }


  }
`;

