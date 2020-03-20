import React from 'react';

import Zango from './../../assets/images/zango.jpg';
import Kilamba from './../../assets/images/kilamba.jpg';
import Sequele from './../../assets/images/sequele.jpg';

import { Container, HouseBox } from './styles';

export default () => {
  return (
    <Container>
      <div className="top">
        <h1>Arrendamento, Compras ou Vendas de Casas.</h1>
        <p>Escolhade dentre varias casas a sua para morar</p>
      </div>
      <HouseBox BG1={Zango} BG2={Kilamba} BG3={Sequele}>
        <main>
          <div>
            <div className="img" /> 
            <div className="content">
              <div>
                <h1>Rapido</h1>
                <p>
                  Estas a precisar de uma casa, entre em contacto  e dentro de 24horas, teremos uma casa para si
                </p>
              </div>
            </div>
          </div>
          <div>
          <div className="content">
            <div>
              <h1>Rapido</h1>
              <p>
                Estas a precisar de uma casa, entre em contacto  e dentro de 24horas, teremos uma casa para si
              </p>
            </div>
            </div>
            <div className="img" /> 
          </div>
          <div>
            <div className="img" /> 
            <div className="content">
              <div>
                <h1>Rapido</h1>
                <p>
                  Estas a precisar de uma casa, entre em contacto  e dentro de 24horas, teremos uma casa para si
                </p>
              </div>
            </div>
          </div>
        </main>
      </HouseBox>
    </Container>
  )
}
