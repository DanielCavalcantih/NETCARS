import Header from '../components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sell.css';
import imgIcon from '../images/img-icon.png';
import Context from "../context/netcarsContext";
import { insertCar, getMyCars } from '../services/api';
import getCars from '../services/api';
import { useContext } from 'react';

function SellPage() {
  const [imgSrc, setImgSrc] = useState(undefined);
  const [car, setCar] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setMyCars, setCars } = useContext(Context);

  const handleChangeImage = ({ target }) => {
    setImgSrc(target.value);
    setCar({ ...car, image: target.value });
  };

  const handleClick = async () => {
    try {
      await insertCar(car);
      const allMyCars = await getMyCars();
      const cars = await getCars();
      setMyCars(allMyCars);
      setCars(cars);
      navigate('/mycars');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="sell">
      <Header />
      <div className="container-img-inputs">
        <div>
          <img className="picture_img" src={ imgSrc } alt="" />
          <label className="archive">
            <img width="40" src={ imgIcon } alt="" />
            <input type="url" onChange={ handleChangeImage } name="image" placeholder="http://url-da-image.com" />
          </label>
        </div>
        <div className="inputs-infos">
          <input onChange={ ({ target }) => setCar({ ...car, brand: target.value }) } type="text" placeholder="Marca" />
          <input onChange={ ({ target }) => setCar({ ...car, name: target.value }) } type="text" placeholder="Nome" />
          <input onChange={ ({ target }) => setCar({ ...car, model: target.value }) } type="text" placeholder="Modelo" />
          <input onChange={ ({ target }) => setCar({ ...car, year: Number(target.value) }) } type="number" placeholder="Ano" />
          <input onChange={ ({ target }) => setCar({ ...car, color: target.value }) } type="text" placeholder="Cor" />
          <input onChange={ ({ target }) => setCar({ ...car, price: Number(target.value) }) } type="number" placeholder="Preço" />
          <span>{ error }</span>
        </div>
      </div>
      <button onClick={ handleClick } className="send-car">Enviar anúncio</button>
    </div>
  )
}

export default SellPage;