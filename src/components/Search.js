import React, { useEffect, useState } from 'react'

export const Search = ({listState, setListState}) => {
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    //Filtrar para buscar coincidencias
    let movies_found = listState?.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
    //console.log('movies_found',movies_found);
    if(search.length === 0){
      movies_found = JSON.parse(localStorage.getItem('movies'));
      setNotFound(true);
    }else{
      setNotFound(false)
    }
    //Actualizar estado del listado principal con lo que eh logrado filtrar
    setListState(movies_found);
  }, [search])
  

  return (
    <div className="search">
        <h3 className="title">Search</h3>
        {notFound && search.length > 1 && (
          <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
        )}
        <form>
            <input 
              type="text" 
              id="search_field" 
              name='search'
              autoComplete='off'
              //value='Lo que estoy buscando'
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button id="search">Search</button> */}
        </form>
    </div>
  )
}
