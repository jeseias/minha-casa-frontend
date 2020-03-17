import React, { useState } from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';

import api from './../../../services/api';

import { Container } from './styles';
import { Button } from './../../../styles/components';

export default ({ setApp }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
      await api.post('/auth', {
        telefone, password
      });
      
      setApp(true);
      history.push(`${url}/app`)
    } catch(err) {
      alert('Dados Errados')
    } 
  }

  return (
    <Container>
      <main>
        <h1>Nossa Casa</h1>
        <input 
          value={telefone}
          onChange={ e => setTelefone(e.target.value)}
          type="number" 
          placeholder="912 345 678"
        />
        <input 
          value={password}
          onChange={ e => setPassword(e.target.value)}
          type="password" 
          placeholder="senha"
        />
        <Button send onClick={() => handleLogin()}>Entrar</Button>
      </main>
    </Container>
  )
}