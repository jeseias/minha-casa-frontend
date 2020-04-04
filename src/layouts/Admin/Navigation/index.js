import React from 'react';
import { Link } from 'react-router-dom'; 

import { FaHome, FaPaperPlane } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

import { Container } from './styles';

export default () => {
  return (  
    <Container>
      <Link to={`/admin/app/message`}><MdMessage size={30}/></Link>
      <Link to={`/admin/app`}><FaHome size={30}/></Link>
      <Link to={`/admin/app/reservas`}><FaPaperPlane size={30}/></Link>
    </Container>
  )
}