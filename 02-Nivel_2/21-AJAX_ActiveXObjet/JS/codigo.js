/*
    Objeto ActiveXObject
        * Nueva forma de trabajar el resultado
        * Enviar Peticiones POST
        * Objeto FormData
        * 
    La manera de trabajar si el usuario esta trabajando con internet explorer
*/

let peticion;

if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

// En el caso que este objeto XMLHttpRequest exista o sea real 
// la variable peticion tenga lo que contenga el objeto XMLHttpRequest
// de lo contrario new ActiveXObject("Microsoft.XMLHTTP");
// que es el objeto que usamos para internet explorer

peticion.addEventListener("load",()=>{
    console.log(peticion.readyState);           // Ciclo del estado de la peticion 4 finalizado
    console.log(peticion.status);               // Estado de la peticion
    console.log(typeof peticion.response);      // El tipo de dato de lo que nos devuelve el servidor
    console.log(peticion.response);             // Lo que nos devuelve el servidor
    console.log(JSON.parse(peticion.response)); // Esto es para transformar lo que nos devuelve el servidor en JSON 
    console.log(JSON.parse(peticion.response).Nombre); // llamando una propiedad del objeto JSON
    almacenado = JSON.parse(peticion.response); // Almacenando la informacion en una variable    
    console.log(almacenado.Nombre)              // llamando una propiedad del objeto JSON desde una variable
})

peticion.open("GET","informacion.txt");

peticion.send();

