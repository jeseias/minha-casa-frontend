import React, { useState, useEffect } from 'react';
import { FaUserTie, FaPhone, FaMoneyBillAlt, FaBed, FaLocationArrow } from 'react-icons/fa';
import { MdLocationOn  } from 'react-icons/md';

import api from './../../../services/api';

import { Container, ReservaBox } from './styles';

import Navigator from './../Navigation';

export default () => {
  const [reservas, setResevas] = useState([]); 

  useEffect(() => {
    async function loadReservas() {
      try {
        const booking = await api.get('/bookings');
        setResevas(booking.data);
      } catch (err) {
        alert('Não foi possivel buscar reservas, atualize a pagina');
      }
    }
    loadReservas()
  }, [reservas]);

  async function deleteBooking(id) {
    try {
      await api.delete(`bookings/${id}`);
      alert('Eliminado com sucesso');
    } catch (err) {
      alert('Não foi possivel eliminar tente novamente')
    }
  }

  return (
    <Container>
      <h1>Reservas</h1>
      
      <main>
        {
          reservas.map(reserva =>
            <ReservaBox key={reserva._id} BG={reserva.house.thumbnail} >
              <div className="img" />
              <div className="content">
                <p> 
                  <FaUserTie size={15} />
                  <b>{reserva.name}</b>
                </p>
                <p> 
                  <FaPhone size={15} />
                  <b>{reserva.telefone}</b>
                </p> 
                <p>
                  <MdLocationOn size={15} />
                  <b>{reserva.house.location}</b>
                </p>
                <p>
                  <FaLocationArrow size={15} />
                  <b>{reserva.house.location_long}</b>
                </p>
                <p>
                  <FaBed size={15} />
                  <b>T{reserva.house.norooms}</b>
                </p>
                <p>
                  <FaMoneyBillAlt size={15} />
                  <b>{reserva.house.price}AKZ</b>
                </p>
              </div>
              <div className="config">
                <button onClick={() => deleteBooking(reserva._id)}>Eliminar</button>
              </div>
            </ReservaBox>
          )
        }  
      </main>


      <Navigator />
    </Container>
  )
}