import styled from 'styled-components';

import { grey_brown, light_bg } from './../../../styles/colors';
import { CenterElements } from './../../../styles/utils';
import { MoveElement } from './../../../styles/mixins';

export const Container = styled.div`
  background: ${light_bg}; 
  ${CenterElements}
  width: 100vw;
  height: 100vh; 

  main {
    ${MoveElement('-50px')};
    background: ${grey_brown};
    width: 100%;
    height: 200px;
    max-width: 250px;
    padding: 1rem;
    border-radius: 1rem;
  }
`;
