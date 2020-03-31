import styled from 'styled-components';

export const Container = styled.div`
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
    box-shadow: 0 0 1.2rem #1116;

    .img {
      opacity: .8;
      cursor: pointer;
    }
  }

  .img {
    background: ${props => `url(${props.BG})`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 170px;  
    transition: All ease-in-out .3s; 
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
      display: block;
      margin: 4rem auto 0 auto;
      padding: 1rem 2rem;
      font-size: 1.5rem;
      border-radius: 5px;
      transition: All ease-in-out .3s;
    }
  }
`;