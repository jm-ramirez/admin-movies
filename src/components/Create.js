import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Create = ({setListState}) => {
    const titleComponente = "Añadir película";
    
    const [peliState, setPeliState] = useState({
        title: '',
        description: ''
    });

    const { title, description } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        
        //Create objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        };
        //Guardar estado
        setPeliState(movie);

        //Actualizar el estado del listado principal
        setListState(elements => {            
            return elements ? [...elements, movie] : [movie];
        });

        //Guardar en el almacenamiento local
        SaveInStorage("movies", movie);
    };
    
    return (
        <div className="add">
            <h3 className="title">{titleComponente}</h3>
            {(title && description) && "Has creado la pelicula: " + title}
            <form onSubmit={e => conseguirDatosForm(e)}>
                <input type="text" id="title" name='title' placeholder="Titulo" />
                <textarea id="description" name="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
