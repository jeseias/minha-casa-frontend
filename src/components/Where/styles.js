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
  padding: 0 5rem;
  grid-gap: 2rem;
  margin-top: 4rem;


  .content {
    display: block;

    > div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      > div {
        width: 50%;
      }

      .details {
        padding: 5rem;
      }
    }
  }
`;

