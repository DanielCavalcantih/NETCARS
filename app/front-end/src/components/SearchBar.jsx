import filterImg from '../images/filter.png';
import lupa from '../images/lupa.png';
import { useContext } from 'react';
import Context from '../context/netcarsContext';

function SearchBar({ handleClick, btnText }) {
  const { cars, search, handleClickSearch, handleSearch, handleClickRemove } = useContext(Context);

  return (
  <div className="container-btn-filter">
    <div className="show-remove-filters">
      <button className="btn-filters" onClick={ handleClick }><img width="18" src={ filterImg } alt="" />{ btnText }</button>
      <button className="remove-filters" onClick={ handleClickRemove }>Remover filtro</button>
    </div>
    <form htmlFor="search" className="container-search">
      <p>{ cars.length } Resultados</p>
      <div>
        <input id="search" value={ search } autoComplete="off" type="text" onChange={ handleSearch } placeholder="Busque o seu carro" />
        <button type="submit" onClick={ handleClickSearch }><img width="25" src={ lupa } alt="" /></button>
      </div>
      <button onClick={ handleClickRemove } className="remove-search">Mostrar todos</button>
    </form>
  </div>
  )
}

export default SearchBar;