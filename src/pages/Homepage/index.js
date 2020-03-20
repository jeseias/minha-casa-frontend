import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './../../layouts/Homepage';

import { Container } from './styles';

export default () => 
  <Container>
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </Container>