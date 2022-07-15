export const GuardarEnStorage = (clave, elemento) => {
    //Conseguir los elementos que ya tenemos en el storage
    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);
    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //Añadir un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con la peli nueva
        elementos = [elemento];
    }
    //Guardar en el local storage
    localStorage.setItem(clave, JSON.stringify(elementos));
    //Devolver objeto
    return elemento;
};
