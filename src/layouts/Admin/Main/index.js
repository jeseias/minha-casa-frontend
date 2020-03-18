import React, { useEffect, useState, useMemo } from 'react';
import api from './../../../services/api';

import { FaTrashAlt, FaPen, FaEye, FaPlus, FaCamera } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import Navigator from './../Navigation';

import { Container, HousesContainer, House, AddHouse, Preview } from './styles';

export default () => {
  const [houses, setHouses] = useState([]);
  const [again, setAgain] = useState(0);

  const [seeAddHouse, setSeeAddHouse] = useState(false);

  const [images, setImages] = useState([]);
  const [location, setLocation] = useState('');
  const [locationLong, setLocationLong] = useState('');
  const [price, setPrice] = useState('');
  const [tipo, setTipo] = useState('');
  const [rooms, setRooms] = useState('');
  const [description, setDescription] = useState('');

  const previews = useMemo(() => {
    const allImages = images.map( image =>image ? URL.createObjectURL(image) : null );
    return allImages;
  }, [images])


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

  async function handleDeleteHouse(id) {
    try {
      await api.delete(`/houses/${id}`);
      setAgain(again + 1)
    } catch(err) {
      alert('Nao foi possivel tente novamante')
    }
  }

  async function handleAddHouse() {
    const data = new FormData();

    data.append('location', location);
    data.append('location_long', locationLong);
    data.append('price', price);
    data.append('tipo', tipo);
    data.append('norooms', rooms);
    data.append('description', description); 

    for (const file of images) {
      data.append('images', file);
    } 
    try {
      await api.post('/houses', data);
      alert('Adicionado com successo');
      setAgain(again + 1);
      dontAddHouse();
    } catch(err) {
      alert('Nao foi possivel tente novamente.');
    }
  } 

  function dontAddHouse() {
    setSeeAddHouse(false);
    setImages([]);
    setLocation('');
    setLocationLong('');
    setPrice('');
    setRooms('');
    setTipo('');
    setDescription('');
  }
 
  return (
    <Container>
      <h1>Minha Casa</h1>

      <div className="addHouse">
        <FaPlus 
          onClick={() => setSeeAddHouse(true)}
          size={23}
        /> 
      </div>

      <AddHouse BG={previews} display={seeAddHouse}>
        <div className="img">
          <FaCamera size={30}/>
          <input 
            multiple={true} 
            onChange={e => setImages(Array.from(e.target.files))}
            type="file" 
          />
        </div>
        <div className="allImages">
          {previews.map(img => <Preview BG={img} classname="image" />)} 
        </div>
        <div className="inputs">
          <input 
            placeholder="Local"
            onChange={e => setLocation(e.target.value)}
            value={location}
            type="text" 
          />
          <input 
            placeholder="Local longo"
            onChange={e => setLocationLong(e.target.value)}
            value={locationLong}
            type="text" 
          />
          <input 
            placeholder="Preco"
            onChange={e => setPrice(e.target.value)}
            value={price}
            type="number" 
          />
          <input 
            placeholder="Numero de quartos"
            onChange={e => setRooms(e.target.value)}
            value={rooms}
            type="number" 
          />
          <select 
            onChange={e => setTipo(e.target.value)}
            value={tipo}>
            <option value="Alugeu">Alugeu</option>
            <option value="Compra">Compra</option>
          </select>
          <textarea 
            onChange={e => setDescription(e.target.value)}
            value={description}
            placeholder="Descricao"
          ></textarea>
        </div>
        <div className="config">
          <button onClick={() => handleAddHouse()} >Adicionar</button>
          <button onClick={() => dontAddHouse()} >Cancel</button>
        </div>
      </AddHouse>

      <HousesContainer>
        {houses.map(home => 
          <House key={home._id} BG={home.thumbnail}>
            <div className="img" />
            <div className="location">
              <MdLocationOn size={14}/>
              {home.location}
            </div>
            <div className="details">
              <div className="location_long">{home.location_long}</div>
              <div className="price">{home.price} AKZ</div>
              <div className="t">T{home.norooms}</div>
              <div className="type">{home.tipo}</div>
              <div className="description">{home.description}</div>
            </div>
            <div className="config">
              <FaTrashAlt 
                onClick={() => handleDeleteHouse(home.id)}
                size={20} />
              <FaEye size={20} />
              <FaPen size={20} />
            </div>
          </House>
        )}
      </HousesContainer>
      <Navigator />
    </Container>
  )
}
