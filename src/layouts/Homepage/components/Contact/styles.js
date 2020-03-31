import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const ContactBox = styled.div`
  padding: 3rem;
  width: 100%;
  background: #f1f1f1;

  main {
    display: flex;
    margin: 7rem auto;
    width: 77%;
    box-shadow: 0 0 4rem #1114;
    
    > div {
      width: 50%;

      &.img {
        background: ${props => `url(${props.BG}) no-repeat center`};
        background-size: cover;
      }

      &.details {
        padding: 1rem;
        background: #fff;

        h1 {
          font-size: 2.7rem;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        input, select, textarea {
          border: none;
          box-shadow: 0 0 .1rem #3339;
          display: block;
          width: 90%;
          margin: 2rem auto;
          padding: .4rem .9rem;
          font-size: 1.3rem;
          border-radius: .3rem;
        }

        textarea {
          height: 200px;
        }

        button {
          padding: 1rem 2rem;
          border: none;
          display: block;
          margin: 0 auto;
          font-size: 1.rem;
          border-radius: 10px;
          font-weight: bold;
          transition: All ease-in-out .3s;
          outline: none;

          &:hover {
            background: orange;
            cursor: pointer;
            color: #fff;
          }
        }
      }
    }
  }
`;
