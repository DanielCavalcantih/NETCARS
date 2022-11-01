import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../styles/login.css';
import { login, register, getMyCars } from '../services/api';
import { useContext } from 'react';
import Context from '../context/netcarsContext';
import getCars from '../services/api';

function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { pathname } = useLocation();
  const { setMyCars, setCars } = useContext(Context);

  const handleClick = async () => {
    const userInfo = {
      name,
      password,
    };

    try {
      await login(userInfo);
      const cars = await getCars();
      setCars(cars);
      const myCars = await getMyCars();
      setMyCars(myCars);
      navigate('/');
    } catch(error) {
      setError(error.response.data.message);
    }
  }

  const handleClickRegister = async () => {
    const userInfo = {
      name,
      email,
      password,
    };
    try {
      await register(userInfo);
      setError('');
      setName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch(error) {
      setError(error.response.data.message);
    };
  }

  const handleClickRegisterLogin = () => {
    setError('');
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="login">
      <div className="title">
        <h1>NETCARS</h1>
        <h2>Siga sua rota em frente, sobre 4 rodas</h2>
      </div>
      <div className="form-login">
        <h2>
          {
            pathname === '/login' ? 'Olá, bem vindo(a) de volta!' : 'Olá, seja muito bem vindo(a)!'
          }
        </h2>
        <label htmlFor="user">
          <input type="text" value={ name } id="user" placeholder="Usuário" onChange={ ({ target }) => setName(target.value) } />
        </label>
        <label htmlFor="email" hidden={ pathname === '/login' ? true : false }>
          <input type="email" value={ email } id="email" placeholder="E-mail" onChange={ ({ target }) => setEmail(target.value) } />
        </label>
        <label className="input-password" htmlFor="password">
          <input type="password" value={ password } id="password" placeholder="Senha" onChange={ ({ target }) => setPassword(target.value) } />
          <span hidden={ password ? true : false } className="min-pass">( Mínimo 8 caracteres )</span>
        </label>
        {
          pathname === '/login'
            ? <button onClick={ handleClick }>Entrar</button>
            : <button onClick={ handleClickRegister }>Registrar</button>
        }
        {
          pathname === '/login'
          ? <p>Não tem uma conta ? <Link onClick={  handleClickRegisterLogin } to="/register" className="register-login">Registre-se</Link></p>
          : <p>Já tem uma conta ? <Link onClick={ handleClickRegisterLogin } to="/login" className="register-login">Entrar</Link></p>
        }
        <span className="error">{ error }</span>
      </div>
    </div>
  )
}

export default LoginPage;