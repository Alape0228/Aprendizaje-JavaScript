/*
    * Sintaxis
    * Objeto Error
    * Catch Incondicional
    * Catch Condicional
    * Sentencia Throw
    * Finally

    en caso de que la minima probabilidad aparezca o genere un error usar el try-catch

*/

//////////////////////////////////// Sentencias de Bloque ////////////////////////////////////

try {
    asfasfasfs
} catch (error) {
    console.log(error)
    console.log("El error es de tipo : " + typeof error);
} finally{
    console.log("Me da igual si hay un error o no igual me mostrare")
}

/*
    * En el try se ejecutara un error
    * El error que genera el try lo vamos a pasar por parametro al catch
    * Finalmente mostramos por consola el error
    * Con esto evitamos que el navegador nos salte un error y poder manejarlo a nuestro antojo
    * No funciona con errores de syntaxis
    
    * typeof nos permite ver el tipo de dato (para este caso es objeto)
    * Recordar que typeof nos podria indicar si es string numer objeto array etc
     
    * finally sirve para que sin importar que haya o no error se ejecute el bloque de codigo
*/


//////////////////////////////////// throw ////////////////////////////////////

/*
    * throw es para que nos genere un error
    * Estos errores tambien pueden ser objetos u arrays
*/

// throw "hola"; 

// try {
//     throw "Soy un pinche error";    
// } catch (error) {
//     console.log(error)
// }

try {
    throw {
        error1 : "Esto es el error #1",
        error2 : "Esto es el error #2",
        error3 : "Esto es el error #3",
    }    
} catch (error) {
    console.log(error)
    for (const i in error) {
        console.log(error[i])
    }
    console.log(error.error2)   // Llamamos unicamente el segundo error del array u objeto

}

// Recorrimos el objeto o array error que almacena los distintos tipos de errores