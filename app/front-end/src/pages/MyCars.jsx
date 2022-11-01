import Header from "../components/Header";
import '../styles/mycars.css';
import CarCard from '../components/CarCard';
import Context from "../context/netcarsContext";
import { useContext } from 'react';

function MyCars() {
  const { myCars } = useContext(Context);

  return (
    <div className="mycars">
      <Header />
      {
        Array.isArray(myCars) && myCars.length ? (
          <div className="container-car-list">
            {
              myCars.map((car) => <CarCard key={ car.id } car={ car } />)
            }
          </div>
        ) : <p className="no-cars">Você ainda não postou nenhum carro!</p>
      }
    </div>
  )
}

export default MyCars;