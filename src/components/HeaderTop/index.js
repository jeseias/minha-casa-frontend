import React from 'react';
import { Link as AnchorLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { FaEnvelope, FaPhone, FaFacebookSquare, FaInstagram, FaLinkedin, FaBars } from 'react-icons/fa';

import LOGO from './../../assets/images/logo.png';
import LOGOTEXT from './../../assets/images/LOGO-TEXT.png';

import { Container, Top, Navigator } from './styles';

export default ({ nav, setNav }) => {

  return (
    <Container>
      <Top visible={nav}>
        <div>
          <AnchorLink to='/admin' >
            <img src={LOGOTEXT} alt="minhacasa"/>
          </AnchorLink>
          <p><FaEnvelope size={14}/> minhacasa@gmail.com</p>
          <p><FaPhone size={14}/> 943666464</p>
        </div>
        <div>
          <a href="/" ><FaFacebookSquare size={16} /></a>
          <a href="/" ><FaInstagram size={16} /></a>
          <a href="/" ><FaLinkedin size={16} /></a> 
        </div>
      </Top>
      <Navigator visible={nav}>
        <div>
          <img src={LOGO} alt="logo"/>
          <FaBars className="nav-bar" size={27} onClick={() => setNav(!nav)}/> 
        </div>
        <nav >
          <ul>
            <Link 
              href=''
              to='/'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}> Incio </Link>
            <Link 
              href=''
              to='casas'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}> Casas </Link> 
            <Link 
              href=''
              to='contacto'
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}> Contacto </Link>  
          </ul>
        </nav>
      </Navigator>
    </Container>
  )
}