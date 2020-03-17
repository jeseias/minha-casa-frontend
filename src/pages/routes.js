import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Adminpage from './Adminpage';
import Homepage from './Homepage';

export default () => 
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/admin" component={Adminpage} />
    </Switch>
  </BrowserRouter>