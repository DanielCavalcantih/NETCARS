import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';
import imgPerfil from '../images/perfil.png';
import { useContext } from 'react';
import Context from '../context/netcarsContext';

function Header() {
  const token = localStorage.getItem('token');
  const { pathname } = useLocation();
  const { handleClickLogin } = useContext(Context);

  return (
    <header>
      <Link to="/"><h1>NETCARS</h1></Link>

      <nav>
        <ul>
          <li><Link to="/" className={ pathname === '/' ? 'selected' : '' }>comprar carro</Link></li>
          <li><Link to={ token ? '/sell' : '/login' } className={ pathname === '/sell' ? 'selected' : '' }>vender carro</Link></li>
          <li><Link to={ token ? '/mycars' : '/login' } className={ pathname === '/mycars' ? 'selected' : '' }>meus carros</Link></li>
        </ul>
      </nav>
      <button onClick={ handleClickLogin } className="login-btn">{ token ? 'Sair' : 'Entrar' }<img width="22" src={ imgPerfil } alt="" /></button>
    </header>
  )
};

export default Header;