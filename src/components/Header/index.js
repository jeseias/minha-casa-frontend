import React from 'react';
import { Link } from 'react-router-dom';

import Luanda from './../../assets/images/luanda.jpg';

import { FaEnvelope, FaPhone } from 'react-icons/fa';

import { Container, Top, Navigator, Main } from './styles';

export default () => {
  return (
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
   
      <Main BG={Luanda}>
        <h1>Encontre A Sua Nova Casa</h1>
        <p>Se tu tas a vender ou alugar uma casa entre em <Link to="/contacto">CONTACTO</Link></p>
        <div>
          <input type="text" placeholder="Local de onde desejas viver" />
          <button>Pesquisar</button>
        </div>
      </Main>
    </Container>
  )
}