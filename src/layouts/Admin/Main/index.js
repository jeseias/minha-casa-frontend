import React, { useEffect, useState, useMemo } from 'react';
import api from './../../../services/api';

import { FaTrashAlt, FaPen, FaEye, FaPlus, FaCamera } from 'react-icons/fa';

import Navigator from './../Navigation';

import { Container, HousesContainer, House, AddHouse, Preview, DLE, NoHouse } from './styles';

export default () => {
  const [houses, setHouses] = useState([]);
  const [again, setAgain] = useState(0);
  const [dle, setDle] = useState(false);
  const [delHouse, setDelHouse] = useState('')

  const [seeAddHouse, setSeeAddHouse] = useState(false);

  const [images, setImages] = useState([]);
  const [block, setBlock] = useState("");
  const [building, setBuilding] = useState("");
  const [price, setPrice] = useState("");
  const [tipo, setTipo] = useState("Alugeu");
  const [rooms, setRooms] = useState("");
  const [description, setDescription] = useState("");

  const previews = useMemo(() => {
    const allImages = images.map((image) =>
      image ? URL.createObjectURL(image) : null
    );
    return allImages;
  }, [images]);

  async function loadHouses() {
    try {
      const home = await api.get("/houses");
      setHouses(home.data.houses);
    } catch (err) {
      console.log("Atualiza a pagina novamente");
    }
  }

  useEffect(() => {
    loadHouses();
  }, [again]);

  async function handleDeleteHouse() {
    try {
      await api.delete(`/houses/${delHouse}`);
      setAgain(again + 1);
      setDle(false);
    } catch (err) {
      alert("Não foi possivel eliminar a casa");
    }
  }

  async function handleAddHouse() {
    const data = new FormData();

    data.append("block", block);
    data.append("building", building);
    data.append("price", price);
    data.append("type", tipo);
    data.append("number_of_rooms", rooms);
    data.append("description", description);

    for (const file of images) {
      data.append("images", file);
    }
    try {
      await api.post("/houses", data);
      setAgain(again + 1);
      dontAddHouse();
    } catch (err) {
      alert("Nao foi possivel tente novamente.");
    }
  }

  function dontAddHouse() {
    setSeeAddHouse(false);
    setImages([]);
    setBlock("");
    setBuilding("");
    setPrice("");
    setRooms("");
    setTipo("");
    setDescription("");
  }

  return (
    <Container>
      <h1>Minha Casa</h1>

      <div className="addHouse">
        <FaPlus onClick={() => setSeeAddHouse(true)} size={23} />
      </div>

      <DLE visible={dle}>
        <p>
          Tem certeza que ques <b>ELIMINAR</b>
        </p>
        <div className="btns">
          <div className="delete" onClick={() => handleDeleteHouse()}>
            Sim
          </div>
          <div
            className="cancel"
            onClick={() => {
              setDle(false);
              setDelHouse("");
            }}
          >
            Cancelar
          </div>
        </div>
      </DLE>

      <AddHouse BG={previews} display={seeAddHouse}>
        <div className="img">
          <FaCamera size={30} />
          <input
            multiple={true}
            onChange={(e) => setImages(Array.from(e.target.files))}
            type="file"
          />
        </div>
        <div className="allImages">
          {previews.map((img) => (
            <Preview BG={img} key={img._id} classname="image" />
          ))}
        </div>
        <div className="inputs">
          <select
            name=""
            id=""
            value={block}
            onChange={(e) => {
              setBlock(e.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
          </select>
          <input
            placeholder="Predio"
            onChange={(e) => setBuilding(e.target.value)}
            value={building}
            type="text"
          />
          <input
            placeholder="Preco"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
          />
          <input
            placeholder="Numero de quartos"
            onChange={(e) => setRooms(e.target.value)}
            value={rooms}
            type="number"
          />
          <select onChange={(e) => setTipo(e.target.value)} value={tipo}>
            <option value="Alugeu">Alugeu</option>
            <option value="Compra">Compra</option>
          </select>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Descricao"
          ></textarea>
        </div>
        <div className="config">
          <button onClick={() => handleAddHouse()}>Adicionar</button>
          <button onClick={() => dontAddHouse()}>Cancel</button>
        </div>
      </AddHouse>

      <HousesContainer>
        {houses[0] ? (
          houses.map((home) => (
            <House key={home._id} BG={home.thumbnail}>
              <div className="img" />
              <div className="bottom">
                <div className="details">
                  <div className="location">
                    <b>Local: </b>
                    {home.location}
                  </div>
                  <div className="location_long">
                    <b>Local longo: </b>
                    {home.location_long}
                  </div>
                  <div className="price">
                    <b>Preço: </b>
                    {home.price} AKZ
                  </div>
                  <div className="t">
                    <b>Quartos: </b>
                    {home.norooms}
                  </div>
                  <div className="type">
                    <b>Tipo: </b>
                    {home.tipo}
                  </div>
                  <div className="description">
                    <b>Descrição: </b>
                    {home.description}
                  </div>
                </div>
                <div className="config">
                  <FaTrashAlt
                    onClick={() => {
                      setDelHouse(home.id);
                      setDle(true);
                    }}
                    size={20}
                  />
                  <FaEye size={20} />
                  <FaPen size={20} />
                </div>
              </div>
            </House>
          ))
        ) : (
          <NoHouse>
            Ainda não tens nenhuma casa cadastrada. Cadastra já uma casa
          </NoHouse>
        )}
      </HousesContainer>
      <Navigator />
    </Container>
  );
}
