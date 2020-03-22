import React from 'react';

import Header from './../../components/Header';
import Casas from './../../components/Casas';
import Where from './../../components/Where';
import Footer from './../../components/Footer';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <Header /> 
      <Casas />
      <Where /> 
      <Footer />
    </Container>
  )
}
