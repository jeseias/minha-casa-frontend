import React, { useState } from 'react';

import api from './../../../../services/api';

import Beach from './../../../../assets/images/contact.jpg';

import { FaPaperPlane } from 'react-icons/fa';


import { Container, ContactBox } from './styles';

export default () => {
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');

  async function handleContact() {
    if(name && tipo && msg && telefone) {
      try {
        await api.post('/messages', {
          name,
          telefone,
          tipo,
          message: msg
        });
        alert('Mensagen enviada com sucesso');
        setName('');
        setTelefone('');
        setTipo('');
        setMsg('');
      } catch (err) {
        alert('Não foi possivel, tente novamente');
      }
    } else alert('Os campo nome, telefone, tipo e mensagen são obrigatorios');
  }

  return (
    <Container>
      <ContactBox BG={Beach}>
        <main>
          <div className="img" />
          <div className="details">
            <h1>Entre Em Contacto <FaPaperPlane size={27} /> </h1>
            <input 
              placeholder="Seu Nome"
              onChange={e => setName(e.target.value)}
              value={name}
              type="text" 
            />
            <input 
              type="number" 
              placeholder="Seu Telefone"
              onChange={e => setTelefone(e.target.value)}
              value={telefone}
            />
            <select
              onChange={e => setTipo(e.target.value)}
              value={tipo}
            >
              <option value="mensagen">Mensagen Normal</option>
              <option value="alugar">Quero Alugar</option>
              <option value="compra">Quero Compra</option>
            </select>
            <textarea 
              placeholder="Sua mensagen aqui"
              onChange={e => setMsg(e.target.value)}
              value={msg}
            ></textarea>
            <button onClick={() => handleContact()}>Enviar</button>
          </div> 
        </main>
      </ContactBox>
    </Container>
  )
}