import React from 'react';

import CL1 from './../../assets/images/cli1.jpg';
import CL2 from './../../assets/images/cli2.jpg';
import CL3 from './../../assets/images/cli3.jpg';

import { Container, Main } from './styles';

export default () => {
  return (
    <Container>
      <div className="top">
        <h1>Arrendamento, Compra e vendas de casa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eaque repellat ut?</p>
      </div>
      <Main BG={CL1} BG1={CL2} BG2={CL3}>
        <div className="ad">Google Ad</div>
        <div className="content">
          <div>
            <div className="img"></div>
            <div className="details">
              <div>
                <h1>Super Facil</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis earum praesentium maxime.</p> 
              </div>
            </div>
          </div>
          <div>
            <div className="details">
              <div>
                <h1>Todos a ganhar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit nulla quo?</p>
              </div>
            </div>
            <div className="img"></div>
          </div>
          <div>
            <div className="img"></div>
            <div className="details">
              <h1>Isto muito maravilha</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti tenetur aspernatur ut!</p>
            </div>
          </div>
        </div>
        <div className="ad">Google Ad</div>
      </Main>
      <div className="ad bottom">Google Ad</div>
    </Container>
  )
}