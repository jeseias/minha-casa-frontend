import React, { useState } from 'react'; 

import api from './../../services/api';

import { Container, Main } from './styles';

export default ({ visibleBox, setVisibleBox, house: { location, thumbnail, price, norooms, _id }}) => {
  const [name, setName] = useState(''); 
  const [telefone, setTelefone] = useState(''); 

  async function hanldeReserve() {
    try {
      await api.post('/bookings', {
        name,
        telefone,
        house: _id
      });
      setVisibleBox(false);
      alert('Reserva Feita Com Successo')
    } catch (err) {
      alert('Houve um erro tente novamente')
    }
  }

  return (
    <Container visible={visibleBox}>
      <Main BG={thumbnail}>
        <div className="house">
          <h1>Reserva Esta Casa</h1>
          <div className="img" />
          <p><b>Local</b> {location} </p> 
          <p><b>Preço</b> {price} AKZ</p> 
          <p><b>T</b> {norooms} </p> 
        </div>
        <div className="input">
          <div>
            <label htmlFor="name">Seu nome:</label>
            <input 
              onChange={e => setName(e.target.value)}
              value={name}
              type="text" 
              id="name"
            />
          </div>
          <div>
            <label htmlFor="telefone">Seu telefone:</label>
            <input 
              onChange={e => setTelefone(e.target.value)}
              value={telefone}
              type="number" 
              id="telefone"
            />
          </div>
          <div className="btns">
            <button
              onClick={() => hanldeReserve()}
            >Reserva</button>
            <button
              onClick={() => {
                setName('');
                setTelefone('');
                setVisibleBox(false);
              }}
              className="cancel"
            >Cancelar</button>
          </div>
        </div>
      </Main>
    </Container>
  )
}