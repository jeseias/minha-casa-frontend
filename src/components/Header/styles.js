import styled from 'styled-components';

export const Container = styled.div`
  transition: All ease-in-out .3s;
`;

export const SearchBox = styled.div`
  box-shadow: 0 0 .5rem rgba(0,0,0, .5);
  transition: All ease-in-out .3s;
  border-radius: 10px;
  transform: scale(0);
  position: absolute;
  overflow-y: scroll;
  max-height: 400px;
  background: #fff;
  max-width: 750px;
  display: block;
  padding: 1rem;
  width: 100%;
  z-index: 10;
  opacity: 0;
  left: 50%;
  ${props => 
    props.visible ?
      `
        position: relative;
        bottom: 0;
        transform: translate(-50%, 5%) scale(1); 
        opacity: 1;
      ` :
      `
        transform: scale(0);
        top: 800px;
      `
  } 

  > div:last-child {
    border-bottom: none;
  }
`;

export const HomeBox = styled.div`
  display: flex; 
  padding-bottom: .8rem;
  margin-bottom: .8rem;
  border-bottom: 2px solid #DDD;
  transition: All ease-in-out .3s;

  .img {
    width: 80px;
    height: 80px;
    grid-area: img;
    background: ${props => `url(${props.BG}) no-repeat`};
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    transition: All ease-in-out .3s;
  }

  &:hover .img {
    opacity: .8;
  }

  .details {
    width: calc(100% - 80px);
    padding: 0 .7rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    .location {
      font-weight: bold;
      font-size: 1.4rem;
      text-decoration: underline;
      cursor: pointer; 
      transition: All ease-in-out .3s;

      &:hover {
        color: orange;
      }
    }
  } 
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

export const Main = styled.header`
  background: ${props => `url(${props.BG})`};
  background-size: cover;
  background-position: center;
  max-height: 500px;
  height: 500px;
  display: flex; 
  align-items: center;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: #1117;
    width: 100%;
    height: 100%;
    z-index: 1;
  } 

  * {
    z-index: 10;
  }

  h1 {
    font-size: 7em;
    color: #fff;
    margin: 10rem auto 0 auto;
  }

  p {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.5rem;
    margin: 1rem auto 5rem auto;

    a:link, a:active, a:visited {
      color: #fff;

      &:hover {
        border-bottom: 2px solid #1117;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  div {
    input {
      background: #fff;
      width: 500px;
      border-radius: 5px;
      border: none;
      height: 60px;
      padding: .5rem 2rem;
      font-size: 1.7rem;
      outline: none;
      border-bottom: 2px solid transparent;
      transition: All ease-in-out .3s;

      &:focus {
        border-color: orange;
      }
    }

    button {
      height: 60px;
      border: none;
      border-radius: 5px;
      padding: .5rem 2rem;
      margin-left: .5rem;
      font-size: 1.7rem;
      transition: All ease-in-out .3s;

      &:hover {
        background: orange;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
