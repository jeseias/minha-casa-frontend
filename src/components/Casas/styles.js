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

export const Home = styled.div`
  min-height: 300px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 0 1rem #1113;
  padding-bottom: 7rem;
  border-radius: 5px; 
  position: relative;
  transition: All ease-in-out .3s;

  &:hover {
    transform: scale(1.05);
  }

  .img {
    background: ${props => `url(${props.BG})`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 170px;  
  }

  .location {
    font-weight: bold;
    color: #333;
    margin: 2rem auto 1rem auto;
    font-size: 1.8rem;
  }

  .t {
    margin-bottom: .5rem;
  }

  .location_long {
    width: 60%;
    margin: 0 auto;
    margin-bottom: .5rem;
  }

  .content {

    button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 1em;
      background: transparent;
      color: #333;
      text-transform: uppercase;
      border-bottom: 2px solid #333;
      border-radius: 0;
    }
  }

`;
