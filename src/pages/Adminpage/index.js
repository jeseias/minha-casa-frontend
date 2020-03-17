import React from 'react';

import { Container } from './styles';

import Loginpage from './../../layouts/Admin/LoginPage';

export default ({ setApp }) => {
  return (
    <Container> 
      <Loginpage setApp={setApp}/> 
    </Container>
  )
}