import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {
    const title_component = "Editar película";

    const saveEdition = (e, id) => {
        e.preventDefault();

        //Conseguir el target del evento
        let target = e.target;
        //Buscar el indice del objeto de la pelicula a actualizar
        const movies_storage = getMovies();
        const index = movies_storage?.findIndex(movie => movie.id === id);
        
        //Crear objeto con ese id, titulo y descripcion del formulario
        let movie_updated = {
            id,
            title: target.title.value,
            description: target.description.value
        };

        //Actualizar el elemento con ese index
        movies_storage[index] = movie_updated;
        //Guardar el nuevo array de objetos en el local storage
        localStorage.setItem('movies', JSON.stringify(movies_storage));
        //Actualizar estados
        setListState(movies_storage);
        setEdit(0);
    };
    return (
        <div className='edit_form'>
            <h3 className='title'>{title_component}</h3>
            <form onSubmit={e => saveEdition(e, movie.id)}>
                <input 
                    type='text'
                    name='title'
                    className='titulo_editado'
                    defaultValue={movie.title}
                />
                <textarea
                    name='description'
                    defaultValue={movie.description}
                    className='Título original de la película'
                />
                <input
                    type='submit'
                    className='editar'
                    value='Actualizar'
                />
            </form>
        </div>
    )
}
