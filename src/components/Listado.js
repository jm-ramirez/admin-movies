import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {
    //const [listadoState, setListadoState] = useState([]);
    const conseguirPeliculas = () => {     
        let peliculas = JSON.parse(localStorage.getItem('pelis'));
        
        setListadoState(peliculas !== null ? peliculas : []);

        return peliculas;
    };

    const borrarPeli = (id) => {
        //Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();
        //Filtrar peliculas para que elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas?.filter(peli => peli.id !== parseInt(id));
        //Actualizar estado del listado
        setListadoState(nuevo_array_pelis);
        //Actualizar los datos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
    };

    useEffect(() => {
        conseguirPeliculas();
    }, []);
    
    return (
        <>
            {listadoState && listadoState?.length > 0 ?
                listadoState?.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>
        
                            <button className="edit">Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                        </article>
                    );
            })
            :
                <h2>No hay peliculas para mostrar.</h2>
            } 
        </>
    )
}
