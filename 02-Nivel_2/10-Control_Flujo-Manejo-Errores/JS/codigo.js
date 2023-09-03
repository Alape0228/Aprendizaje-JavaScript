/*
CONTROL DE FLUJO Y MANEJO DE ERRORES
    *Sentencias de Bloque
    *Sentencias de Control de Flujo
    *Sentencias de manejo de Excepciones
        Es darle un mejor manejo a los errores

*/

//////////////////////////////////// Sentencias de Bloque ////////////////////////////////////
let nombre = "pedro";
{
    let nombre = "David";
    alert(nombre);

    {
        let nombre = "Mafe";
        alert(nombre);
    }
}
alert(nombre);
/*
    * La razon por la cual todas estas sentencias de codigo funcionan a pesar de que contengan la misma variable con distinto valor es debido a los bloques {}
    * Cuando se manejan bloques se ejecutan como aparte los distintos grupos o conjuntos de codigo
    * como alert es lo que se muestra en pantalla se muestra primero david mafe y luego pedro
*/


//////////////////////////////////// Sentencias de Control de Flujo ////////////////////////////////////
if (3 > 2){
    alert ("Esto es una sentencia de Control de Flujo")
}
/*
    * if, else if
    * Quiere decir que se manejan condicionales para que un conjunto o una parte del codigo se ejecute
*/


//////////////////////////////////// Sentencias de manejo de Excepciones ////////////////////////////////////
if (3 > 2){
    alert ("Esto es una sentencia de Control de Flujo")
}

/*
    * Es darle un mejor manejo a los errores
*/