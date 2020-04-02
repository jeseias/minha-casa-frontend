import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaMoneyBillAlt } from 'react-icons/fa';

import api from './../../../../services/api';


import TopHeader from './../../../../components/HeaderTop';
import Luanda from './../../../../assets/images/luanda.jpg';

import { Container, Main, SearchBox, HomeBox } from './styles';

export default ({ setVisible, setCurrentHouse, searchVisible, setSearchVisible }) => {
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
    <Container onClick={() => searchVisible ? setSearchVisible(false) : '' }>
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
            placeholder="Onde tu desejas viver ?" 
            value={searchValue}
            onClick={() => {
              setSearchVisible(!searchVisible);
              handleSearch();
              loadHouses();
            }}
            type="text" 
          /> 
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
                    <div className="location_long">
                      <MdLocationOn size={15} />
                      {home.location_long}
                    </div> 
                    <div className="price">
                      <FaMoneyBillAlt size={12} />
                      {home.price} AKZ
                    </div> 
                    <div className="rooms">
                      <FaBed size={12} />
                      {home.norooms} Quartos
                    </div> 
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