import React from 'react';

import { Container } from './styles';

export default ({house, setVisibleBox, setVisible, setCurrentHouse}) => {
  return (
    <Container BG={house.thumbnail}>
      <div 
        className="img" 
        onClick={() => {
          setCurrentHouse(house);
          setVisible(true)
        }}
      />
      <div className="content">
        <div className="location">{house.location}</div>
        <p className="location_long">{house.location_long}</p>
        <p className="t">T{house.norooms}</p>
        <p className="price">{house.price} AKZ</p>
        <button
          onClick={() => {
            setCurrentHouse(house);
            setVisibleBox(true);
          }}
        >Reservar</button>
      </div>
    </Container>
  )
}
