import React from 'react';

// import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaMoneyBillAlt } from 'react-icons/fa';

import { Container } from './styles';

export default ({house, setVisibleBox, setVisible, setCurrentHouse}) => {
  return (
    <Container BG={house.thumbnail}>
      <div
        className="img"
        onClick={() => {
          setCurrentHouse(house);
          setVisible(true);
        }}
      />
      <div className="content">
        <div className="location">Block: {house.block}</div>
        <p className="t">
          <FaBed size={15} />T{house.number_of_rooms}
        </p>
        <p className="price">
          <FaMoneyBillAlt size={15} />
          {house.price} AKZ
        </p>
        <button
          onClick={() => {
            setCurrentHouse(house);
            setVisibleBox(true);
          }}
        >
          Reservar
        </button>
      </div>
    </Container>
  );
}
