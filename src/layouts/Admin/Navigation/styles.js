import styled from 'styled-components';

import { CenterElements } from './../../../styles/utils';

export const Container = styled.div`
  ${CenterElements}
  justify-content: space-around;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 50px;
  background: #333;

  a {
    color: #fff;
  }
`;
