import React from 'react';

import Header from './../../components/Header';
import Casas from './../../components/Casas';
import Where from './../../components/Where';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <Header /> 
      <Casas />
      <Where />
    </Container>
  )
}
