import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from './../../services/api';

import HouseChecker from './../HouseChecker';

import Luanda from './../../assets/images/luanda.jpg';

import { FaEnvelope, FaPhone } from 'react-icons/fa';

import { Container, Top, Navigator, Main, SearchBox, HomeBox } from './styles';

export default () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const [homes, setHomes] = useState([]);
  const [homesFilterd, setFilteredHomes] = useState([]);
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
    const houses = await api.get('/houses');
    setHomes(houses.data)
    setFilteredHomes(houses.data)
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
  }, [setVisible]); 

  return ( 
    <Container>
      <HouseChecker 
        visible={visible} 
        house={currentHouse}
        className="outside"
        setVisible={setVisible} 
      />

      <Top>
        <p>MINHACASA</p>
        <p><FaEnvelope size={10}/> minhacasa@gmail.com</p>
        <p><FaPhone size={10}/> 936516269</p>
      </Top>
    
      <Navigator>
        <div>
          <h1>MINHA CASA</h1>
        </div>
        <nav>
          <ul>
            <Link to="/">Inicio</Link>
            <Link to="/casas">Casas</Link>
            <Link to="/contacto">Contacto</Link>
          </ul>
        </nav>
      </Navigator>
   
      <Main BG={Luanda}>
        <h1>Encontre A Sua Nova Casa</h1>
        <p>Se tu tas a vender ou alugar uma casa entre em <Link to="/contacto">CONTACTO</Link></p>
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