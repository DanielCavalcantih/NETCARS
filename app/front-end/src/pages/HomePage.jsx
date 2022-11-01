import { useState, useContext } from 'react';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import '../styles/home.css';
import Filters from '../components/Filters';
import Context from '../context/netcarsContext';
import SearchBar from '../components/SearchBar';

function HomePage({ history }) {
  const [visibility, setVisibility] = useState(false);
  const [listClass, setListClass] = useState('car-list');
  const [btnText, setBtnText] = useState('Ocultar filtros');
  const { cars } = useContext(Context);

  const handleClick = () => {
    setVisibility(!visibility);
    if (visibility) {
      setBtnText('Ocultar filtros');
      setListClass('car-list');
    } else {
      setBtnText('Mostrar filtros');
      setListClass('car-list2')
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="container-list-btns">
        <SearchBar handleClick={ handleClick } btnText={ btnText } />
        {
          cars.length ? (
            <div className="container-list-filters">
              <Filters hidden={ visibility } />
              <ul className={ listClass }>
                {
                  cars.map(car => <CarCard key={ car.id } car={ car } />)
                }
              </ul>
            </div>
          ) : (
            <div className="container-no-cars">
              <p className="no-cars">Nenhum carro encontrado...</p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default HomePage;