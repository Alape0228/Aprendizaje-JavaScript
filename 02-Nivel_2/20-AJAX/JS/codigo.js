/*
    AJAX
        Significa JavaScript Asincrono y xml
        * Objeto XMLHttpRequest
            con este objeto podemos enviar peticiones get pos etc
        * Enviar peticiones GET
        * Trabajar el resultado de las peticiones
        * Objeto ActiveXObject
        * Nueva forma de trabajar el resultado
        * Enviar Peticiones POST
        * Objeto FormData
*/

let peticion = new XMLHttpRequest();
// De esta manera indicamos que la variable peticion es un objeto cuya funciones enviar o recibir peticiones 


console.log("Ejemplo readyState: 0"); 
console.log(peticion); 

peticion.addEventListener("readystatechange",()=>{
    console.log(peticion.readyState)    //Devuelve el estado de la peticion
    console.log(peticion.response)      //solo mostrara en la posicion 3 y 4 que es donde la peticion se esta procesando y esta lista para ser devuelta
})
/*
    readyState tiene en total 4 estados
    1   = la solicitud se creo correctamente la tenemos no enviada
    2   = la solicitud se envio correctamente o fue recibida correctamente
    3   = la solicitud se esta procesando la peticion
    4   = la solicitud esta toda lista nos dio una respuesta y que el resultado ya se puede utilizar
*/

peticion.open("GET","informacion.txt");
/*
    * Metodo que abre peticiones
    * parametro 1 el tipo de peticion (get-pos) parametro 2 es la url
    * Quiero decir que me abra una peticion tipo get
    * como url tambien podemos pasar por parametro facebook youtube etc
*/
peticion.send();   //  * Metodo que Envia peticiones

console.log("Ejemplo readyState: 1"); 
console.log(peticion); 
/*
    console.log(peticion.responseText);     
        * Nos va devolver informacion cuando el codigo de respuesta es 3 o 4 y el status esta en 200
*/


/*
status muestra el estado
404 no se encuentra
200 todo correcto

addEventListener("load",()=>{})
*/