import React from 'react';
import {  Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <div>
        <span>
          <FaPhone size={15}/>
          <b>912 434 645 / 923 355 232</b>
        </span>
        <span>
          <FaEnvelope size={15}/>
          <b>minhacasa@gmail.com</b>
        </span>
        <br/>
        <Link to="/casas">Casas Disponivel</Link>
        <Link to="/contacto">Entre Em Contacto</Link> 
      </div>
      <div className="bottom">
        <p>&copy; Copyrights 2020. Todos Direitos Reservados.</p>
        <p>Site Feito por <b><a rel="noopener noreferrer" target="_blank" href="https://jeseiasdomingos.netlify.com">Jeseías Domingos</a></b></p>
      </div>
    </Container>
  )
}
