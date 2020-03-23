import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #1119;
  z-index: 100;
  ${props => 
    props.visible ?
    `
    top: 0;
    opacity: 1;
    ` :
    `
      top: -150%;
      opacity: 0;
    `
  }

  .close {

  }
`;

export const HouseBox = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 43%;
  left: 48%;
  width: 100%;
  max-width: 950px;
  height: 570px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 1rem #1111;
  display: flex;
  overflow: hidden;

  .img {
    width: 65%;
    height: 100%;
    background: ${props => `url(${props.BG})`};
    background-position: center;
    background-size: cover;
    display: block;
  }

  .content { 
    width: 35%;
    display: flex;
    flex-direction: column;

    > div {
      width: 100%;
    }

    .images {
      height: 70%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 400px)); 
    }

    .details {
      height: 30%;
      padding: 1rem;
      overflow-y: scroll;

      h2 {
        margin-bottom: 1rem; 
      }

      p {

        svg {
          display: inline-block;
          margin-right: 1rem;
        }
      }

      button {
        display: block;
        border: none;
        border-radius: 5px;
        padding: .5rem 2rem;
        margin: 1rem auto;
        font-size: 1.7rem;
        transition: All ease-in-out .3s;

        &:hover {
          background: orange;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`;

export const IMG = styled.div`
  background: ${props => `url(${props.BG})`};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  display: block;
  filter: blur(2px);
  transition: All ease-in-out .3s;

  &:hover {
    opacity: .8;
    filter: blur(0);
  }
`;