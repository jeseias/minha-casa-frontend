import styled from 'styled-components';

export const Container = styled.div`
  background: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem; 
  color: #aaa;

  a:link, a:active, a:visited {
    display: inline-block;
    color: #aaa;
    text-decoration: none;
    font-size: 1.3rem;
    padding: .4rem .6rem;
    margin-top: .5rem;
  }

  div:nth-child(1) {


    span {
      padding: .3rem .7rem;

      svg {
        position: relative;
        top: 3px;
        margin-right: .5rem;
      }
    }

  }
`;
