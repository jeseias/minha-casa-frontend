import styled from 'styled-components';

import { Colors } from './index';

export const Button = styled.button`
  display: block;
  padding: 1rem 2rem;
  text-align: center;
  border: none;
  margin: 1rem auto;
  color: #333;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 .3rem .3rem rgba(0,0,0, .3);

  ${props => props.send ? `background: ${Colors.light_bg}` : ''}
`;