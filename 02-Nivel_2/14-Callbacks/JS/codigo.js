/*
callback
    Es una funcion dentro de una funcion
    Una funcion que llama a otra funcion
*/

function FuncionEjemplo1(nombre10) {
    nombre10("pedro");
}
function FuncionEjemplo2(nombre20) {
    console.log(nombre20)
}
FuncionEjemplo1(FuncionEjemplo2);
/*
    * Es como si el parametro nombre10 fuese exactamente que nombre20 fuese exatamen
    * function FuncionEjemplo1(nombre10) 
    * function FuncionEjemplo2(nombre20) 
    * FuncionEjemplo1(FuncionEjemplo2);
    * se ejecuta la primera funcion con parametro la segunda funcion pero comparten el mismo parametro es por eso que nombre10 es basicamente lo mismo que nombre20 solo que en uno almacena y en el otro muestra
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function prueba2(bobo) {
    bobo("ramon")
}
//Ejecutando la funcion prueba2 con otra funcion adentro
prueba2 (function(nombre2) {
    console.log(nombre2)
})
/*
    * Se crea funcion prueba2 que como parametro bobo contiene el nombre ramon
    * ejecutamos la funcion anterior pero esta ves al parametro le estamos pasando una operacion que es imprimir console
    * se imprime ramon debido a que es lo que le pasa por parametro
    * eso quiere decir que nombre2 es igual al parametro bobo
    * eso quiere decir que cuando se ejecuta la funcion de nombre2 le estamos pasando por parametro bobo que equivale ramon

*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function prueba3(bobo) {
    bobo("carlos")
}
//Ejecutando la funcion prueba2 con otra funcion adentro
prueba3 ((nombre3)=> {
    console.log(nombre3)
})
/*
    *se crea la funcion prueba3 que contiene como parametro carlos
    *se ejecuta la funcion con otra funcion adentro y se le pasa por parametro el valor carlos
    *en teoria hay dos funciones con dos parametros con distinto nombre
    *pero a pesar de que los parametros tengan distinto nombre contiene el mismo valor solo que en una funcion almaceno un nombre y en la otra lo muestra
*/


