import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaFacebookSquare, FaInstagram, FaLinkedin, FaBars } from 'react-icons/fa';

import LOGO from './../../assets/images/logo.png';
import LOGOTEXT from './../../assets/images/LOGO-TEXT.png';

import { Container, Top, Navigator } from './styles';

export default () => {
  const [nav, setNav] = useState(false);

  return (
    <Container>
      <Top visible={nav}>
        <div>
          <img src={LOGOTEXT} alt="minhacasa"/>
          <p><FaEnvelope size={14}/> minhacasa@gmail.com</p>
          <p><FaPhone size={14}/> 936516269</p>
        </div>
        <div>
          <Link to="/" ><FaFacebookSquare size={16} /></Link>
          <Link to="/" ><FaInstagram size={16} /></Link>
          <Link to="/" ><FaLinkedin size={16} /></Link> 
        </div>
      </Top>
      <Navigator visible={nav}>
        <div>
          <img src={LOGO} alt="logo"/>
          <FaBars className="nav-bar" size={27} onClick={() => setNav(!nav)}/> 
        </div>
        <nav >
          <ul>
            <Link to="/">Inicio</Link>
            <Link to="/">Casas</Link>
            <Link to="/">Contacto</Link>
          </ul>
        </nav>
      </Navigator>
    </Container>
  )
}