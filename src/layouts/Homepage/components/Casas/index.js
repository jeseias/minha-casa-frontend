import React, { useEffect, useState } from 'react';

import api from './../../../../services/api';

import HomeBox from './../../../../components/HomeBox'; 

import { Container, Ad } from './styles';

export default ({ setCurrentHouse, setVisible, setVisibleBox }) => {
  const [houses, setHouses] = useState([]); 
  const [url, setUrl] = useState('');  
  const [items, setItems] = useState(8);  
  const [done, setDone] = useState(false);

  useEffect(() => {
    async function loadHouses() {
      try {
        const home = await api.get(url || `/houses?items=${items}`);
        setHouses(home.data.houses);
        setDone(home.data.limitItems);
      } catch(err) {
        console.log('Atualiza a pagina novamente')
      }
    }
    loadHouses()
  }, [url, items]);

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
        {
          done ? 
            <button onClick={() => {
              setItems(8, () => {
                setUrl(`/houses?items=${items}`);
              });
            }}>Ver Menos</button> 
              :
            <button onClick={() => {
              setItems(items + 4, () => {
                setUrl(`/houses?items=${items}`);
              });
            }}>Ver Mais</button>
        }
      </main> 
    </Container>
  )
}