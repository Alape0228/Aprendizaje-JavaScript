/*
SENTENCIA SWITCH
    *Sintaxis y clausula case
    *Break
        Se usa para que el resto de case no se sigan ejecutando
    *Default
        Si la condicion no se cumple ejecutarse lo que Default contenga 

*/

//////////////////////////////////// Sentencias de Bloque ////////////////////////////////////
let ejemplo = "hola";

switch (ejemplo) {
    case "banano": 
        console.log("Esto es es el caso numero 1");
        break
    case "pera": 
        console.log("Esto es es el caso numero 2");
        break
    case "manzana": 
        console.log("Esto es es el caso numero 3");
        break
    default:
        console.log("No se que intentas poner");
}



/*
    * si no usamos break se mostrara todo el resto del codigo
    * como paranetro se debe colocar una variable
    * si la variable declaramos el valor de algun case se ejecutara ese parte del codigo case
    * Default en este caso funciona en el momento que la variable ejemplo no contenga nada igual a los case es como un else
*/
