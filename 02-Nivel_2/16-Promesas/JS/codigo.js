/*
PROMESAS:
    Son un objetos que tiene 2 callback (resolve,reject)

    * Que puede representar?
        * Terminacion de una operacion asincrona (reject)
        * Fracaso de una operacion asincrona (resolve)
        
    * Ejemplos y solucion al problema de los callback
    
*/
/////////////////////////////////// Caso Positivo ///////////////////////////////////
console.log("Aqui Mostaremos el ejemplo 1 :")

let ejemplo1 = "David";

let promesa1 = new Promise((resolve,reject)=>{
    if (ejemplo1 !== "David") {
        reject("Lo Siento El Nombre No Es Pedro");
    } else {
        resolve(ejemplo1)
    }
})

console.log(promesa1) //Devuelve la variable promesa1 que en realidad viene siendo como un objeto
// Mostrara lo que lleva resolve
promesa1.then((resultado1)=>{
    console.log(resultado1)
})
/*
    then()
        * Es un metodo que tienen las promesas que nos acceden al valor que tiene el objeto
        * para que nos devuelva lo que contiene reject o resolve es necesario realizar la funcion con el metodo  then() asi independientemente de que sea verdadero o falso (reject-resolve) nos devolvera lo que contiene en el caso de que sea POSITIVO
*/

/////////////////////////////////// Caso Negativo ///////////////////////////////////
console.log("Aqui Mostaremos el ejemplo 2 :")

let ejemplo2 = "Jose";

let promesa2 = new Promise((resolve,reject)=>{
    if (ejemplo2 !== "David") {
        reject("Lo Siento El Nombre No Es Jose");
    } else {
        resolve(ejemplo2)
    }
})

console.log(promesa2) //Devuelve la variable promesa2 que en realidad viene siendo como un objeto

promesa2.then((resultado1)=>{
    console.log(resultado1)
}).catch((e)=>{
    console.log(e)
})
// Mostrara lo que lleva reject
/*
    * Para mostrar lo que contiene el reject respuesta negativa
    * Se usa metodo catch que contengan la funcion flecha que en su parametro conllevara la variable error
*/

