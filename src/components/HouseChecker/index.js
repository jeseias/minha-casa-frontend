import React, { useState } from 'react';

import { FaBed, FaPlusCircle } from 'react-icons/fa';
import { MdLocationOn, MdAttachMoney, MdClose } from 'react-icons/md';

import { Container, HouseBox, IMG} from './styles';

export default 
  ({house:{images,location,location_long,price,norooms,_id,thumbnail,description},visible,setVisible}) => {

  const [cImg, setCImg] = useState(false);

  return (
    <Container 
      visible={visible}
      className="outside"
      onClick={e => e.target.classList.contains('outside') ? setVisible(false) : true }
    >
      <MdClose className="close" size={30}/> 
      <HouseBox 
        className="super-box"
        BG={cImg || thumbnail}>
        <div className="img" />
        <div className="content">
          {console.log(thumbnail, _id)}
          <div className="images">
            {
              images.map(img =>
                <IMG 
                  BG={`http://127.0.0.1:8002/files/${img}`} 
                  onClick={() => {
                    setCImg(`http://127.0.0.1:8002/files/${img}`);
                    thumbnail = null;
                  }}
                  key={img} 
                />  
              )
            }
          </div>
          <div className="details">
            <h2><b>{location}</b></h2>
            <p class="location_long"><MdLocationOn size={15}/>{location_long}</p>
            <p class="price"><MdAttachMoney size={15}/>{price} AKZ</p>
            <p class="rooms"><FaBed size={15}/>T{norooms}</p>
            <p class="description"><FaPlusCircle size={15}/>{description}</p>
            <button>Reservar</button>
          </div>
        </div> 
      </HouseBox>
    </Container>
  )
}