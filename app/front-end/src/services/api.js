import axios from "axios";

export const login = async (userInfo) => {
  const response = await axios.post('http://localhost:3001/login', userInfo);
  localStorage.setItem('token', response.data.token);
};

export const register = async (body) => {
  await axios.post('http://localhost:3001/register', body);
};

const getCars = async () => {
  const response = await axios.get('http://localhost:3001/cars');
  return response.data;
};

export const getMyCars = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://localhost:3001/mycars', {
      headers: {
        'Authorization': token,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data.message;
  };
};

export const getCarsBySearch = async (search) => {
  const response = await axios.get(`http://localhost:3001/searchcars/${ search }`);
  return response.data;
};

export const getCarById = async (id) => {
  const response = await axios.get(`http://localhost:3001/cars/${ id }`);
  return response.data;
};

export const deleteCar = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`http://localhost:3001/cars/${ id }`, {
    headers: {
      'Authorization': token,
    },
  });
};

export const insertCar = async (body) => {
  const token = localStorage.getItem('token');
  await axios.post('http://localhost:3001/cars', body, {
    headers: {
      'Authorization': token,
    },
  });
};

export const updateCar = async (id, body) => {
  const token = localStorage.getItem('token');
  await axios.put(`http://localhost:3001/cars/${ id }`, body, {
    headers: {
      'Authorization': token,
    },
  });
};

export default getCars;
