import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 5rem;

  .top {
    margin: 3rem auto 1rem auto;
    text-align: center;

    h1 {
      font-size: 3rem;
      margin-bottom: .3rem;
      color: #111;
    }

    p {
      font-weight: bold;
      color: #333;
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
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 150px auto 150px;
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
          background: ${props => `url(${props.BG})`};
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 300px;
        }
      }
      &:nth-child(2) {
        .img {
          background: ${props => `url(${props.BG1})`};
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 300px;
        }
      }
      &:nth-child(3) {
        .img {
          background: ${props => `url(${props.BG2})`};
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 300px;
        }
      }


      > div {
        width: 50%; 
      }

      .details {
        background: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;   

        > div {
          width: 75%;

          h1 {
            color: #010103;
            font-size: 2.5rem;
            margin-bottom: .5rem;
          }

          p {
            color: #65554d;
            font-size: 1.5rem;
          }

        }
      }

    }
  }
`;

