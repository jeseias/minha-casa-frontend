import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Top = styled.div`
  background: #202126;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: .3rem 10rem;
  color: #fff;
  transition: All ease-in-out .3s;
  border-bottom: 1px solid #d0a981;

  img {
    width: 60px;
    transition: All ease-in-out .3s; 
  }

  p {
    margin: 0 1rem;
    font-weight: bold;
    position: relative;
    font-size: 1.1rem;

    svg {
      margin-right: .5rem;
      position: relative;
      color: #d0a981;
      top: 2px;
    }
  }
`;

export const Navigator = styled.div`
  background: #202126;
  box-shadow: 0 1rem 1rem rgba(0,0,0, .5);
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 170px;
    transition: All ease-in-out .3s;

    &:hover {
      transform: scale(1.1);
    }
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
      transition: All ease-in-out .3s;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #202126;
        cursor: pointer;
      }
    }
  }
`;
