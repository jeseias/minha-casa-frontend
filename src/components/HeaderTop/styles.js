import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Top = styled.div`
  background: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .3rem 4rem;
  color: #fff;
  transition: All ease-in-out .3s;

  p {
    margin: 0 1rem;
  }
`;

export const Navigator = styled.div`
  background: #fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0, .5);
  padding: 1.5rem 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  nav ul {
    list-style: none;
    margin: 0;

    a:link, a:active, a:visited {
      text-decoration: none;
      color: #000;
      font-size: 1.3rem;
      padding: 1rem 2rem;
      text-align: center;
      transition: All ease-in-out .1s;

      &:hover {
        border-bottom: 2px solid #1117;
        cursor: pointer;
      }
    }
  }
`;
