import React, { useEffect, useState } from 'react';

import api from './../../services/api';

import { Container, Ad, Home } from './styles';

export default () => {
  const [again, setAgain] = useState(0)

  const [houses, setHouses] = useState([]);

  async function loadHouses() {
    try {
      const home = await api.get('/houses');
      setHouses(home.data);
    } catch(err) {
      console.log('Atualiza a pagina novamente')
    }
  }

  useEffect(() => {
    loadHouses()
  }, [again]);

  return (
    <Container>
      <Ad>
        <div>Google Ad here</div>
      </Ad>
      <main>
        <h1>Explore Casas de Luanda</h1>
        <div>
          {houses.map(house => 
            <Home key={house._id} BG={house.thumbnail}>
              <div className="img" />
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
        <button>Ver Mais</button>
      </main> 
    </Container>
  )
}
