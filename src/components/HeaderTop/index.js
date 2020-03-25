import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

import { Container, Top, Navigator } from './styles';

export default () => 
  <Container>
    <Top>
        <p>MINHACASA</p>
        <p><FaEnvelope size={10}/> minhacasa@gmail.com</p>
        <p><FaPhone size={10}/> 936516269</p>
      </Top>
    
      <Navigator>
        <div>
          <h1>MINHA CASA</h1>
        </div>
        <nav>
          <ul>
            <Link to="/">Inicio</Link>
            <Link to="/casas">Casas</Link>
            <Link to="/contacto">Contacto</Link>
          </ul>
        </nav>
      </Navigator>
  </Container>