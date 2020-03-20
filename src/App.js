import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/';

import Pages from './pages/routes';

export default () => {
  return (
    <Router>
      <Pages />
      <GlobalStyles />
    </Router> 
  )
}