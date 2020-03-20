import React from 'react';

import Header from './../../components/Header';
import Casas from './../../components/Casas';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <Header /> 
      <Casas />
    </Container>
  )
}
