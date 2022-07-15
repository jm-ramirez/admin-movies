import React, { useEffect, useState } from 'react'
import { Edit } from './Edit.js';

export const List = ({listState, setListState}) => {
    const [edit, setEdit] = useState(0);
    const getMovies = () => {     
        let movies = JSON.parse(localStorage.getItem('movies'));
        
        setListState(movies !== null ? movies : []);

        return movies;
    };

    const deleteMovie = (id) => {
        //Conseguir peliculas almacenadas
        let pelis_almacenadas = getMovies();
        //Filtrar peliculas para que elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas?.filter(movie => movie.id !== parseInt(id));
        //Actualizar estado del listado
        setListState(nuevo_array_pelis);
        //Actualizar los datos en el localStorage
        localStorage.setItem('movies', JSON.stringify(nuevo_array_pelis));
    };

    useEffect(() => {
        getMovies();
    }, []);
    
    return (
        <>
            {listState && listState?.length > 0 ?
                listState?.map(movie => {
                    return (
                        <article key={movie.id} className="movie-item">
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>
        
                            <button className="edit" onClick={() => setEdit(movie.id) }>Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                            {/* Aparece formulario de editar */}
                            {edit === movie.id && (
                                <Edit movie={movie} getMovies= {getMovies} setEdit={setEdit} setListState={setListState} />
                            )}
                        </article>
                    );
            })
            :
                <h2>No hay peliculas para mostrar.</h2>
            } 
        </>
    )
}
