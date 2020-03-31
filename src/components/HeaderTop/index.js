import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

import LOGO from './../../assets/images/logo.png';
import LOGOTEXT from './../../assets/images/LOGO-TEXT.png';

import { Container, Top, Navigator } from './styles';

export default () => 
  <Container>
    <Top>
        <img src={LOGOTEXT} alt="minhacasa"/>
        <p><FaEnvelope size={10}/> minhacasa@gmail.com</p>
        <p><FaPhone size={10}/> 936516269</p>
      </Top>
    
      <Navigator>
        <div>
          <img src={LOGO} alt="logo"/>
        </div>
        <nav>
          <ul>
            <Link to="/">Inicio</Link>
            <Link to="/">Casas</Link>
            <Link to="/">Contacto</Link>
          </ul>
        </nav>
      </Navigator>
  </Container>