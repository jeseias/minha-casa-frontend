import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HouseChecker from './../HouseChecker';

import api from './../../services/api';

import { Container, Ad, Home } from './styles';

export default () => {
  const [again] = useState(0)
  const [visible, setVisible] = useState(false);

  const [houses, setHouses] = useState([]);
  const [currentHouse, setCurrentHouse] = useState({
    location: '',
    location_long: '',
    price: '',
    norooms: '',
    images: [''],
    thumbnail: '',
    _id: ''
  });

  async function loadHouses() {
    try {
      const home = await api.get('/houses?items=8');
      setHouses(home.data);
    } catch(err) {
      console.log('Atualiza a pagina novamente')
    }
  }

  useEffect(() => {
    loadHouses()
  }, [again]);

  useEffect(() => {
    if(!setVisible) {
      setCurrentHouse({
        location: '',
        location_long: '',
        price: '',
        norooms: '',
        images: [''],
        thumbnail: '',
        _id: ''
      })
    }  
  }, [setVisible]);

  return (
    <Container>
      <HouseChecker 
        visible={visible} 
        house={currentHouse}
        className="outside"
        setVisible={setVisible} 
      />
      <Ad>
        <div>Google Ad here</div>
      </Ad>
      <main>
        <h1>Explore Casas de Luanda</h1>
        <div>
          {houses.map(house => 
            <Home 
              BG={house.thumbnail}
              key={house._id} 
            >
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
                <button>Reservar</button>
              </div> 
            </Home>
          )}
        </div>
        <button><Link to="/casas">Ver Mais</Link></button>
      </main> 
    </Container>
  )
}
