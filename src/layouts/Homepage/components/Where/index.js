import React from 'react';

import CL1 from './../../../../assets/images/cli1.jpg';
import CL2 from './../../../../assets/images/cli2.jpg';
import CL3 from './../../../../assets/images/cli3.jpg';

import { Container, Main } from './styles';

export default () => {
  return (
    <Container>
      <div className="top">
        <h1>Arrendamento, Compra e venda de casas</h1>
        <p>Portal seguro, rápido e simples para achar uma casa</p>
      </div>
      <Main BG={CL1} BG1={CL2} BG2={CL3}>
        <div className="ad">Google Ad</div>
        <div className="content">
          <div>
            <div className="img"></div>
            <div className="details one">
              <div>
                <h1>Seguro</h1>
                <p>
                  Todos os nossos clientes feliz com a qualidade dos nossos serviços. Não a motivo para reclamação.
                </p> 
              </div>
            </div>
          </div>
          <div>
            <div className="details">
              <div className="one">
                <h1>Rápido</h1>
                <p>
                  Não importa onde estejam, alguém precisando de uma casa, é so tu pesquisares ou entrares em contacto, 
                  que a nossa equipa cuida do resto. E em pouco tempo voltamos para se com otimos resultados.
                </p>
              </div>
            </div>
            <div className="img"></div>
          </div>
          <div>
            <div className="img"></div>
            <div className="details">
              <div>
                <h1>Simples</h1>
                <p>
                  Que nem 123. Nada de um outro mundo, a sua nova e otima casa esta a distancia de um click. Não percas
                  mais tempo entre já em contacto
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ad">Google Ad</div>
      </Main>
      <div className="ad bottom">Google Ad</div>
    </Container>
  )
}