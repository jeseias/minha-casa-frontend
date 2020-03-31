import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from './../../../../services/api';

import HomeBox from './../../../../components/HomeBox'; 

import { Container, Ad } from './styles';

export default ({ setCurrentHouse, setVisible, setVisibleBox }) => {
  const [again] = useState(0)

  const [houses, setHouses] = useState([]); 

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
  }, [setVisible, setCurrentHouse]);

  return (
    <Container> 
      <Ad><div>Google Ad here</div></Ad>
      <main>
        <h1>Explore Casas de Luanda</h1>
        <div>
          {houses.map(house => 
            <HomeBox 
              house={house} 
              setVisibleBox={setVisibleBox}
              setVisible={setVisible}
              setCurrentHouse={setCurrentHouse}
              key={house._id}
            />
          )}
        </div>
        <button><Link to="/casas">Ver Mais</Link></button>
      </main> 
    </Container>
  )
}