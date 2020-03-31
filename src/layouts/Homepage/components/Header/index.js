import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from './../../../../services/api';

import TopHeader from './../../../../components/HeaderTop';
import Luanda from './../../../../assets/images/luanda.jpg';

import { Container, Main, SearchBox, HomeBox } from './styles';

export default ({ setVisible, setCurrentHouse }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const [homes, setHomes] = useState([]);
  const [homesFilterd, setFilteredHomes] = useState([]);
 
  async function loadHouses() {
    const houses = await api.get('/houses');
    setHomes(houses.data.houses, () => {});
    setFilteredHomes(houses.data.houses);
  }

  function handleSearch(val) {
    let value = val || ''
    setSearchValue(val)
    setFilteredHomes(homes.filter(home => 
      home.location.toLowerCase().includes(value.toLowerCase())
    ));
  }
  
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
      <TopHeader />
      <Main BG={Luanda}>
        <h1>Encontre A Sua Nova Casa</h1>
        <p>
          Se tu tas a <span>vender</span>, <span>alugar</span> ou a <span>precisar</span> de uma casa entre em <Link to="">CONTACTO</Link>
        </p>
        <div>
          <input 
            onChange={e => {
              handleSearch(e.target.value);
              setSearchVisible(true);
            }}
            placeholder="Local de onde desejas viver" 
            value={searchValue}
            onClick={() => {
              setSearchVisible(!searchVisible);
              handleSearch();
              loadHouses();
            }}
            type="text" 
          />
          <button>Pesquisar</button>
          <SearchBox 
            visible={searchVisible}
            onMouseLeave={() => setSearchVisible(false)}
          >
            {
              homesFilterd.map(home => 
                <HomeBox key={home._id} BG={home.thumbnail}>
                  <div className="img" />
                  <div className="details">
                    <div 
                      className="location"
                      onClick={() => {
                        setCurrentHouse(home);
                        setSearchValue('');
                        setVisible(true);
                      }}
                    >{home.location}</div> 
                    <div className="location_long">{home.location_long}</div> 
                    <div className="price">{home.price} AKZ</div> 
                    <div className="rooms">{home.norooms} Quartos</div> 
                  </div>
                </HomeBox>  
              )
            }
          </SearchBox>
        </div>
      </Main>
   
    </Container>
  )
}