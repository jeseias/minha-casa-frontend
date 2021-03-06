import React, { useState } from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Homepage from './Homepage';

import Adminpage from './Adminpage';
import AdminMain from './../layouts/Admin/Main';
import AdminMessage from './../layouts/Admin/Message';
import AdminReservas from './../layouts/Admin/Reservas';

export default () => {
  const [app, setApp] = useState(false);

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />

      <Route exact path="/admin">
        <Adminpage setApp={setApp}/>
      </Route>

      {
        app ? <>
            <Route exact path="/admin/app" component={AdminMain} />
            <Route exact path="/admin/app/message" component={AdminMessage} /> 
            <Route exact path="/admin/app/reservas" component={AdminReservas} /> 
          </>
          :
          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <h1>
              <Link to={`/admin`}>Faca primeiro o login</Link>
            </h1>
          </div>
      }
    </Switch>
  )
}