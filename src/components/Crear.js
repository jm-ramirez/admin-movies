import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
    const tituloComponente = "Añador película";
    
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        
        //Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        //Guardar estado
        setPeliState(peli);

        //Actualizar el estado del listado principal
        setListadoState(elementos => {            
            return elementos ? [...elementos, peli] : [peli];
        });

        //Guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli);
    };
    
    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
            <form onSubmit={e => conseguirDatosForm(e)}>
                <input type="text" id="titulo" name='titulo' placeholder="Titulo" />
                <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
