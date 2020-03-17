import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Loginpage from './../../layouts/Admin/LoginPage';
import Main from './../../layouts/Admin/Main';

export default () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route exact path={`${path}/`}>
          <Loginpage />
        </Route>
        <Route exact path={`${path}/app`}>
          <Main />
        </Route>
      </Switch>
    </Container>
  )
}