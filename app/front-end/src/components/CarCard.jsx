import '../styles/carCard.css'
import { useLocation, useNavigate } from 'react-router-dom';
import trash from '../images/lixeira.png';
import edit from '../images/edit.png';
import Context from "../context/netcarsContext";
import { useContext } from 'react';
import { getMyCars, deleteCar } from '../services/api';
import getCars from '../services/api';

function CarCard({ car }) {
  const { name, brand, color, model, year, price, image, id, published } = car;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setCars, setMyCars } = useContext(Context);

  const formatedData = (creationDate) => {
    const data = new Date(creationDate);
    const day = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();
    return [day, month, year].join('/');
  }

  const handleClickEdit = () => {
    navigate(`/mycars/edit/${ id }`);
  };

  const handleClickDelete = async () => {
    await deleteCar(id);
    const cars = await getCars();
    setCars(cars);
    const myCars = await getMyCars();
    if (!Array.isArray(myCars)) {
      return setMyCars([]);
    }
    setMyCars(myCars);
  }

  return (
    <li key={ id } className="car-card">
      <img width="250" src={ image } alt="" />
      <p className="car-name">{ brand } { name } { model }</p>
      <span className="year-color">{ year } - { color }</span>
      <div className="price-date">
        <span className="car-price">{ Number(price) }</span>
        <span className="date">Publicado em: { formatedData(published) }</span>
      </div>
      {
        pathname === '/' ? (
          <button className="btn-see-more">Ver mais</button>
        ) : (
          <div className="container-card-buttons">
            <button onClick={ handleClickEdit } className="card-buttons"><img src={ edit } alt="" /></button>
            <button id={ id } onClick={ handleClickDelete } className="card-buttons"><img src={ trash } alt="" /></button>
          </div>
        )
      }
    </li>
  );
};

export default CarCard;