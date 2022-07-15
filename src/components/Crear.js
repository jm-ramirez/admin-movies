import React, { useState } from 'react'

export const Crear = () => {
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

        //Guardar en el almacenamiento local
        guardarEnStorage(peli);
    };

    const guardarEnStorage = peli => {
        //Conseguir los elementos que ya tenemos en el storage
        let elementos = JSON.parse(localStorage.getItem('pelis'));

        console.log(elementos);
        //Comprobar si es un array
        if(Array.isArray(elementos)){
            //Añadir un elemento nuevo
            elementos.push(peli);
        }else{
            //Crear un array con la peli nueva
            elementos = [peli];
        }
        //Guardar en el local storage
        localStorage.setItem('pelis', JSON.stringify(elementos));
        //Devolver objeto
        return peli;
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
