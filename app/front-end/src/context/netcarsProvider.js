import { useState, useEffect } from "react";
import Context from "./netcarsContext";
import getCars from '../services/api';
import { getMyCars, getCarsBySearch } from '../services/api';
import { useNavigate } from "react-router-dom";

function NetcarsProvider({ children }) {
  const [selectedFilter, setSelectedFilter] = useState({ type: undefined, filter: undefined });
  const [cars, setCars] = useState([]);
  const [loginBtn, setLoginBtn] = useState('Entrar');
  const [search, setSearch] = useState('');
  const [myCars, setMyCars] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    (async () => {
      const data = await getCars();
      if (selectedFilter.type) {
        const allCars = data.filter((car) => car[selectedFilter.type] === selectedFilter.filter);
        return setCars(allCars);
      };
      setCars(data);
    })()
  }, [selectedFilter]);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const data = await getMyCars();
        setMyCars(data);
      }
    })()
  }, []);

  const handleClickLogin = () => {
    if (token) {
      setMyCars([]);
      localStorage.removeItem('token');
      return navigate('/');
    }
    navigate('/login');
  };

  const handleClickSearch = async (e) => {
    e.preventDefault();
    const response = await getCarsBySearch(search);
    setCars(response);
    setSearch('');
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleClickRemove = async () => {
    const allCars = await getCars();
    setCars(allCars);
  };

  const valueProvider = {
    loginBtn,
    setLoginBtn,
    selectedFilter,
    setSelectedFilter,
    cars,
    setCars,
    search,
    setSearch,
    myCars,
    setMyCars,
    handleClickLogin,
    handleClickSearch,
    handleSearch,
    handleClickRemove,
  }

  return <Context.Provider value={ valueProvider }>
    { children }
  </Context.Provider>
}

export default NetcarsProvider;