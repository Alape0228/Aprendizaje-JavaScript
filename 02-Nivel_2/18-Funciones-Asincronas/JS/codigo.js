/*
    Asincronoas o Asincrono
        Que trabaja en tiempo real 
        las promesas son asincronas

    await
        solo se permite dentro de una funcion asincrona 
*/

let objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor1",
    propiedad3 : "valor1"
};

let obtenerInformacion = ()=> {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(objeto)
    }, 1000);
   })
}

obtenerInformacion().then((resultado)=>{
    console.log(resultado)
})
// Solicitar informacion en tiempo real a un servidor
// Promise funciona con setTimeout esto debido a que promise funciona con tiempo real asincrono
// como resultado estamos retornando finalmente el objeto depues de 3000 milisegundos (3s) 

/////////////////////////// Funcion Asincrona asyinc() ///////////////////////////

let mostrarInformacion = async()=>{
    resultado2 = await obtenerInformacion();
    console.log(resultado2)
}
mostrarInformacion()
/*
await
    * ES para acceder al valor que retorna la promesa
    * Funciona para mostrar el restultado sin necesidad de usar el metodo then()
    * pero solo se permite dentro de una funcion asincrona 
    * es como decir obten la informacion y hasta que no la obtengas no avances hasta la siguiente
*/


/////////////////////////// Ejercicio explicando then() ///////////////////////////
let mostrarData = (mensaje)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mensaje)
        }, Math.random()*2000);
    })
}
mostrarData("1 : jose").then((res)=>{console.log(res)})
mostrarData("2 : David").then((res)=>{console.log(res)})
mostrarData("3 : Alape").then((res)=>{console.log(res)})
/*
    *   ejecutamos 3 funciones con distintos valores
    *   Con esto evidenciamos que si ejecutamos muchas funciones en distintos tiempos se ejecutara solo teniendo en cuenta el tiempo 
*/

/////////////////////////// Ejercicio explicando await ///////////////////////////

let ejemploWait = async()=>{
    resultado1 = await mostrarData("1 : jose")
    resultado2 = await mostrarData("1 : David")
    resultado3 = await mostrarData("1 : Alape")
    console.log(resultado1)
    console.log(resultado2)
    console.log(resultado3)
}
ejemploWait();
/*
    *   Para esta ocacion usando el await garantizamos que se ejecuten en orden sin importar el tiempo que tome cada una
*/