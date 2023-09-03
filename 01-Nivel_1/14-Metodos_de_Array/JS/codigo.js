/*
    Transformadores
        pop()
            Elimina el ultimo elemento de un arrayy lo devuelve
        shift()
            Elimina el primer elemento de un arrayy lo devuelve
        push()
            Agrega un elemento al array al final de la lista
        reverse()
            invierte el orden de los elementos de un array
        unshift()
            Agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array.
        sort()
            ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
        splice()
            Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos  

    Accesores
        join()
            Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
        slice()
            Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
        Metodos ya vistos en cadena: toString(), indexOf(), lastindexOf(), includes()
*/
document.write("<h3> Ejemplo numero 1 pop() </h3>");
let ejemplo1 = ["David","te amo","maria","fernanda"];
document.write(ejemplo1 + "<br>");
let resultado = ejemplo1.pop();
document.write(resultado + "<br>");
document.write(ejemplo1 + "<br>");
/*
    pop()
        Elimina el ultimo elemento de un arrayy, 
        Devuelve El elemento eliminado
*/

document.write("<h3> Ejemplo numero 2 shift() </h3>");
let ejemplo2 = ["David","te amo","maria","fernanda"];
document.write(ejemplo2 + "<br>");
let resultado2 = ejemplo2.shift();
document.write(resultado2 + "<br>");
document.write(ejemplo2 + "<br>");
/*
    shift()
        Elimina el primer elemento de un arrayy, 
        Devuelve El elemento eliminado
*/

document.write("<h3> Ejemplo numero 3 push() </h3>");
let ejemplo3 = ["David","te amo","maria","fernanda"];
document.write(ejemplo3 + "<br>");
let resultado3 = ejemplo3.push("ejemplo 1","ejemplo 2");
document.write(resultado3 + "<br>");
document.write(ejemplo3 + "<br>");
/*
    push()
        Agrega uno o mas elemento al array al final de la lista, indicando lo que desees
        Devuelve la posicion y/o la cantidad de elementos que cuenta el array
*/


document.write("<h3> Ejemplo numero 4 unshift() </h3>");
let ejemplo5 = ["David","te amo","maria","fernanda"];
document.write(ejemplo5 + "<br>");
let resultado5 = ejemplo5.unshift("ejemplo 1","ejemplo 2");
document.write(resultado5 + "<br>");
document.write(ejemplo5 + "<br>");
/*
    unshift()
        Agrega uno o mas elemento al array al inicio de la lista, indicando lo que desees
        Devuelve la posicion y/o la cantidad de elementos que cuenta el array
*/


document.write("<h3> Ejemplo numero 5 reverse() </h3>");
let ejemplo4 = ["David","te amo","maria","fernanda"];
document.write(ejemplo4 + "<br>");
let resultado4 = ejemplo4.reverse();
document.write(resultado4 + "<br>");
document.write(ejemplo4 + "<br>");
/*
    reverse()
        invierte el orden de los elementos de un array, 
        Devuelve el array pero con el orden no de arriba abajo si no de abajo arriba 
*/

document.write("<h3> Ejemplo numero 6 sort() </h3>");
let ejemplo6 = [5,"maria","te amo",1,"David",3,"fernanda"];
document.write(ejemplo6 + "<br>");
let resultado6 = ejemplo6.sort();
document.write(resultado6 + "<br>");
document.write(ejemplo6 + "<br>");
/*
    sort()
        Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado alfabeticamente y alfanumericamente
        Devuelve el array ordenado alfabeticamente y alfanumericamente 
*/


document.write("<h3> Ejemplo numero 7 splice() </h3>");
let ejemplo7 = [5,"maria","te amo",1,"David",3,"fernanda"];
document.write(ejemplo7 + "<br>");
let resultado7 = ejemplo7.splice(2,3,"agregado1","agregado2","agregado3");
document.write(resultado7 + "<br>");
document.write(ejemplo7 + "<br>");
/*
    splice()    =   splice(posicion,numero de elementos a eliminar,lo que se desee agregar infinitamente) 
        Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos 
        Devuelve los elementos eliminados
        * Recordar que tambien se pueden elminar 0 elementos en una posicion y ahi en esa posicion empezar agregar
        * Si deseo ir al final de la posicion puedo usar -1
*/


document.write("<h3> Ejemplo numero 8 join() </h3>");
let ejemplo8 = [5,"maria","te amo",1,"David",3,"fernanda"];
document.write(ejemplo8 + "<br>");
let resultado8 = ejemplo8.join(" -/- ");
document.write(resultado8 + "<br>");
document.write(ejemplo8 + "<br>");
/*
    join()  =   join(aqui se pone el separado de los elementos en este caso iran en la cadena de texto)
        Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve. convierte los arrays en cadenas de texto
        Devuelve el array en cadena de texto separado por lo indicado en parentesis 
*/


document.write("<h3> Ejemplo numero 9 slice() </h3>");
let ejemplo9 = [5,"maria","te amo",1,"David",3,"fernanda"];
document.write(ejemplo9 + "<br>");
let resultado9 = ejemplo9.slice(0,3);
document.write(resultado9 + "<br>");
document.write(ejemplo9 + "<br>");
/*
    slice()     =   slice(posicion,numero de elementos)
        Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
        Devuelve los elementos seleccionados en parametros en un array
*/





