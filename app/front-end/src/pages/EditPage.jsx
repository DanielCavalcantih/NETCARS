import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getCarById, updateCar, getMyCars } from '../services/api';
import imgIcon from '../images/img-icon.png';
import getCars from '../services/api';
import '../styles/edit.css';
import Context from '../context/netcarsContext';

function EditPage() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const { name, brand, model, year, price, color } = car;
  const [imgSrc, setImgSrc] = useState('');
  const [newCar, setNewCar] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setMyCars, setCars } = useContext(Context);

  useState(() => {
    (async () => {
      const data = await getCarById(id);
      setCar(data);
      setImgSrc(data.image);
    })()
  }, []);

  const handleChangeImage = ({ target }) => {
    setImgSrc(target.value);
    setNewCar({ ...car, image: target.value });
  };

  const handleClickEdit = async () => {
    try {
      await updateCar(id, newCar);
      const cars = await getCars();
      setCars(cars);
      const myCars = await getMyCars();
      setMyCars(myCars);
      navigate('/mycars');
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  const cancel = () => navigate('/mycars');

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    if (value.length === 0) {
      delete newCar[name];
      return setNewCar(newCar);
    }
    setNewCar({ ...newCar, [name]: value });
  }

  return (
    <div className="edit">
      <Header />
      <div className="container-img-inputs">
        <div>
          <img className="picture_img" src={ imgSrc } alt="" />
          <label className="archive">
            <img width="40" src={ imgIcon } alt="" />
            <input type="url" onChange={ handleChangeImage } name="image" placeholder={ imgSrc } />
          </label>
        </div>
        <div className="inputs-infos">
          <input name="brand" onChange={ handleChangeInput } type="text" placeholder={ brand } />
          <input name="name" onChange={ handleChangeInput } type="text" placeholder={ name } />
          <input name="model" onChange={ handleChangeInput } type="text" placeholder={ model } />
          <input name="year" onChange={ handleChangeInput } type="number" placeholder={ year } />
          <input name="color" onChange={ handleChangeInput } type="text" placeholder={ color } />
          <input name="price" onChange={ handleChangeInput } type="number" placeholder={ price } />
          <span>{ error }</span>
        </div>
      </div>
      <div>
        <button onClick={ handleClickEdit } className="send-car">Editar</button>
        <button onClick={ cancel } className="cancel-edit">Cancelar</button>
      </div>
    </div>
  )
}

export default EditPage;