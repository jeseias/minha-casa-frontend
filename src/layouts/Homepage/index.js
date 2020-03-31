import React, { useState } from 'react';

import BookBox from './../../components/BookBox';
import HouseChecker from './../../components/HouseChecker';
import Footer from './../../components/Footer';

import Header from './components/Header';
import Casas from './components/Casas';
import Where from './components/Where';
import Contact from './components/Contact';

import { Container } from './styles';

export default () => {
  const [visibleBox, setVisibleBox] = useState(false);
  const [visible, setVisible] = useState(false);

  const [currentHouse, setCurrentHouse] = useState({
    location: '',
    location_long: '',
    price: '',
    norooms: '',
    images: [''],
    thumbnail: '',
    _id: ''
  });

  return (
    <Container>

      <BookBox 
        setVisibleBox={setVisibleBox}
        visibleBox={visibleBox}
        house={currentHouse}
      />

      <HouseChecker 
        visible={visible} 
        house={currentHouse}
        className="outside"
        setVisible={setVisible} 
        setVisibleBox={setVisibleBox}
      />

      <Header setCurrentHouse={setCurrentHouse} setVisible={setVisible}/> 
      <Casas setCurrentHouse={setCurrentHouse} setVisible={setVisible} setVisibleBox={setVisibleBox}/>
      <Where /> 
      <Contact />
      <Footer />
    </Container>
  )
}
