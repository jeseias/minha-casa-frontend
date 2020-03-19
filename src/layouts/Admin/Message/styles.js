import styled from 'styled-components';

export const Container = styled.div`
  header {

    h1 {
      text-align: center;
      margin: 1rem;
    }

    p {
      font-weight: bold;
      margin: 1rem;
    }
  }

  main {
    padding: 2rem 1rem;
  }
`;

export const DLE = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: 0 auto;
  padding: .5rem 2rem;
  background: #fff;
  box-shadow: 0 0 15rem rgba(25,0,0, .6);
  border-radius: .5rem;
  transition: All ease-in-out .3s;

  ${props => props.visible ? `
      top: 40%; 
    ` :
    `
      top: -150%;
    `
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;

    >div {
      padding: .5rem 1rem;
      color: #fff;
      border-radius: .5rem;
      width: 70px;
      text-align: center;
      margin: 0 1rem;

      &.delete {
        background: #0029;
      }

      &.cancel {
        background: #D00;
      }
    }
  }
`;

export const MensageBox = styled.div`
  box-shadow: 0 0 .3rem rgba(0,0,0, .2);
  padding: .3rem;
  margin-bottom: 1rem;
  ${props => props.done ? `
      border-left: 4px solid green;
    ` :
    `
      border-left: 4px solid #D00;
    `
  }

  > * {
    margin: .6rem;
  }

  .details {
    .name {
      font-size: 2rem;
      font-weight: bold;
    }

    .message {
      background: #f4f4f4;
      padding: 1rem;
      border-radius: .3rem;
      margin: .5rem auto;
    }
  }

  .config {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #333;
    color: #f4f4f4;
    padding: 1rem .3rem;
    margin-top: 1rem;
    border-radius: .4rem;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        margin-right: .5rem;
      }
    }
  }


`;
