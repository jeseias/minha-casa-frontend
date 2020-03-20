import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: 2rem 0rem;
  width: 100vw;
  margin: 0 auto;

  .top {
    text-align: center;
    color: #333;

    h1 {
      font-weight: bold;
      font-size: 2.3rem;
    }

    p {
      font-weight: 400px;
      font-size: 1.5rem;
    }
  }
`;

export const HouseBox = styled.div`
  display: block;
  padding-top: 5rem;

  main{
    display: block; 
    margin: 0 auto;
    width: 1080px;

    > div {
      display: flex;
      flex-wrap: wrap;
      height: 200px;

      > div {
        width: 50%;
      }

      .content {
        background: #1111;
        display: flex;
        justify-content: center;
        align-items: center;

        > div {
          text-align: left;
          width: 60%;
        }
      }

      .img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    div:nth-child(1) {
      .img {
        background: ${props => `url(${props.BG1})`}
      }
    }

    div:nth-child(2) {
      .img {
        background: ${props => `url(${props.BG2})`}
      }
    }

    div:nth-child(3) {
      .img {
        background: ${props => `url(${props.BG3})`}
      }
    }
  } 
`;
