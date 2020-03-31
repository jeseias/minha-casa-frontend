import styled from 'styled-components';

export  const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;
  border-bottom: 4px solid #1111;

  main {
    
    h1 {
      text-align: center;
      font-size: 3rem;  
      color: #333;
      margin-top: 1rem;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px,auto));
      grid-gap: 2.5rem;
      padding-top: 3rem;
    }

    button {
      display: block;
      border: none;
      margin: 4rem auto 0 auto;
      padding: 1rem 2rem;
      font-size: 1.5rem;
      background: orange;
      border-radius: 5px;
      color: #fff;
      transition: All ease-in-out .5s;


      &:hover {
        background: #1111;
        cursor: pointer;
        color: #333;
      }

      a:link, a:active, a:visited {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

export const Ad = styled.div`
  width: 100%;
  height: 150px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 auto;
    width: 70%;
    height: 90%;
    background: #1117;
  }
`;