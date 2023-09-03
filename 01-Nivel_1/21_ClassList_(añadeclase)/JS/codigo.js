/*
    Clases, ClassList y Metodos de ClassList
        Es una particularidad de las clases de los objetos para hacer un monton de cosas con las clases de los objetos

        add():
            Añade una clase
        remove():
            Remueve una clase
        item():
            Devuelve la clase del indice especificado
        contains():
            Verifica si ese elemento posee o no, la clase especificada.
        replace():
            reemplaza una clase por otra.
        toggle():
            si no tiene la clase especificada, la agrega, si ya la tiene, la elimina 
*/

titulo1 = document.querySelector(".titulo1")
titulo1.classList.add("grande")
/*
    add():
        * con esto añandimos una clase al elemento
        * tener en cuenta que podemos acceder a todas las clases de un elemento con "querySelector()" sin tener que usar una variable para cada clase
*/

titulo1.classList.remove("ejemplo1")
/*
    remove():
        Remueve una clase
*/

let contenedorClase = titulo1.classList.item(2);
document.write(contenedorClase + "<br>");
/*
    item():
        * Devuelve la clase del indice especificado
        * el elemento contiene las siguientes clases <h1 class="titulo1 ejemplo1 ejemplo2 ejemplo3">
        * titulo1 almacena todas las clases del elemento <h1>
        * al usar la funcion item(2) le indicamos al sistema que se posiciones y nos tome la clase #3
        * por que la clase #2 fue eliminada anteriormente es por eso que ahora ocupa la posicion 2
        * Devuelve el nombre de la clase especificada en la posicion
*/

valor = titulo1.classList.contains("ejemplo3"); 
document.write(valor + "<br>");
/*
    contains():
        * Verifica si ese elemento posee o no, la clase especificada.
        * en parametros el nombre de la clase que queremos que verifique
        * devuelve en caso de encontrarla como resultado true en caso contrario false
*/

titulo1.classList.toggle("ejemplo4");
/*
    toggle():
        * si no tiene la clase especificada, la agrega, si ya la tiene, la elimina
        * pero si colocamos como segundo parametro true
        * titulo1.classList.toggle("ejemplo4",true);
        * Obligamos al sistema de que si o si la tenga, o false para que si o si sea eliminada  
*/


titulo1.classList.replace("ejemplo2","david");
/*
    replace():
        * reemplaza una clase por otra.
        * Se remplazo la clase ejemplo2 por la clase david
*/
