import React, { useEffect, useState } from 'react';
import api from './../../../services/api';
import { MdPhone } from 'react-icons/md';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

import Navigator from './../Navigation'; 

import { Container, MensageBox, DLE } from './styles';

export default () => {
  const [again, setAgain] = useState(0);
  const [dle, setDle] = useState(false);
  const [cmsg, setMsg] = useState('');

  const [messages, setMessages] = useState([]);

  async function loadHouses() {
    try {
      const msg = await api.get('/messages');
      setMessages(msg.data.messages);
    } catch(err) {
      console.log('Atualiza a pagina novamente')
    }
  }

  async function deleteMsg() {
    try {
      await api.delete(`/messages/${cmsg}`);
      setAgain(again + 1);
      setDle(false)
      alert('Mensagen eliminada com successo');
    } catch (err) {
      alert('Não foi possivel eliminar a mensagen');
    }
  }

  useEffect(() => {
    loadHouses()
  }, [again]);

  return (
    <Container>
      <header>
        <h1>Minha Casa</h1>
        <p>Mensagens de interresados</p>
      </header>
      <DLE visible={dle}>
        <p>Tem certeza que ques <b>ELIMINAR</b></p>
        <div className="btns">
          <div className="delete"  onClick={() => deleteMsg()}>Sim</div>
          <div className="cancel" onClick={() => {setDle(false); setMsg('')}}>Cancelar</div>
        </div>
      </DLE>
      <main>
        {messages.map(msg => 
          <MensageBox done={msg.done}>
            <div className="details">
              <div className="name">{msg.name}</div>
              <div className="message">{msg.message}</div>
            </div>
            <div className="config">
              <div className="telefone"><MdPhone size={15}/>{msg.telefone}</div>
              <div><FaTrashAlt
                onClick={() => {setDle(true); setMsg(msg._id)}} 
                size={15}
              />Apagar</div>
              <div><FaCheck size={15}/>Marcar Lido</div>
            </div>
          </MensageBox>  
        )} 
      </main>
      <Navigator />
    </Container>
  )
}
