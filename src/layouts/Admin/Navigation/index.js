import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'; 

import { FaHome, FaUserCircle } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

import { Container } from './styles';

export default () => {
  const { url } = useRouteMatch();

  return (  
    <Container>
      <Link to={`${url}/message`}><MdMessage size={30}/></Link>
      <Link to={`${url}`}><FaHome size={30}/></Link>
      <Link to={`${url}/usuario`}><FaUserCircle size={30}/></Link>
    </Container>
  )
}