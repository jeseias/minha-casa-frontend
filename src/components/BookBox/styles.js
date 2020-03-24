import styled from 'styled-components';

export const Container = styled.div`
  display: block;
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
`;

export const Main = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 1rem #1114;
  display: flex;
  width: 500px;
  height: 300px;

  > div {
    width: 50%;
    padding: 1rem;

    &.house {
      h1 {
        text-align: center;
      }

      .img {
        background: ${props => `url(${props.BG})`};
        background-position: center;
        background-size: cover;
        height: 200px;
        width: 100%;
      }

      p {
        font-size: 1.2rem;
      }

    }

    &.input {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;

      label {
        font-weight: bold;
        font-size: 1.5rem;
        margin-left: 1rem; 
      }

      input {
        outline: none;
        border: none;
        padding: .4rem .8rem;
        font-size: 1.5rem;
        transition: All ease-in-out .3s;
        border-bottom: 2px solid transparent;
        border-radius: 5px;
        box-shadow: 0 0 .1rem #1113;

        &:focus {
          border-color: orange;
        }
      }

      .btns {

        button {
          padding: 1rem 2rem;
          text-align: center;
          border: none;
          background: orange;
          border-radius: 5px;
          color: #fff;
          font-weight: bold;
          margin: 0 .2rem;
          cursor: pointer;

          &.cancel {
            background: #D04;
          }
        } 
      }
    }
  }
`;
