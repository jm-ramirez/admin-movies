export const SaveInStorage = (clave, element) => {
    //Conseguir los elementos que ya tenemos en el storage
    let elements = JSON.parse(localStorage.getItem(clave));

    console.log(elements);
    //Comprobar si es un array
    if(Array.isArray(elements)){
        //Añadir un elemento nuevo
        elements.push(element);
    }else{
        //Create un array con la movie nueva
        elements = [element];
    }
    //Guardar en el local storage
    localStorage.setItem(clave, JSON.stringify(elements));
    //Devolver objeto
    return element;
};
