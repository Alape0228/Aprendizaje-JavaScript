/*
Obtencion y modificacion de childs (Hijos)

    *replaceChild(variable nueva,Variable anterior)
        *Sirve para remplazar elementos HIjos
            1- Se Crea elemento dentro de una variable 
            2- Se crea texto y se inserta dentro del elemento creado  
            3- Sobre el elemento contenedor remplazamos un elemento con otro


    *removeChild
        *Sirve para Eliminar Elementos Hijos


    *hasChildNodes
        Sirve para Determinar si un elemento cuenta con hijos (elementos)
        Recordar que se puede hacer con if sin esecificar true o false
        Recordar que si cuenta con texto tambien devolvera true por que texto hace parte de un elemento llamado text

    *parentElement
        Devuelve lo que contiene el padre y todo su contenido 
        Se recomienda usar este

    *parentNode
        Devuelve lo que contiene el padre y todo su contenido 

    *nextSibling


    *previousSibling
    

    * nextElementSibling
    

    * nextElementSibling
    



*/

let contenedor = document.querySelector(".contenedor")
let parrafo = document.createElement("P").innerHTML = "Esto es un parrafo";
let h2_Nuevo = document.createElement("H2")
h2_Nuevo.innerHTML = "Esto es el nuevo Texto Creado"
h2_Antiguo = document.querySelector(".h2_Antiguo")
contenedor.replaceChild(h2_Nuevo,h2_Antiguo)
/*
    replaceChild(variable nueva,Variable anterior)
        * Sirve para remplazar elementos HIjos
        1- Se Crea elemento dentro de una variable 
        2- Se crea texto y se inserta dentro del elemento creado  
        3- Sobre el elemento contenedor remplazamos un elemento con otro
*/

let parrafo2 = document.querySelector(".parrafo2")
contenedor.removeChild(parrafo2)
/*
    removeChild(variable a eliminar)
        * Sirve para Eliminar Elementos Hijos
*/

let respuesta = contenedor.hasChildNodes();
if (respuesta) {
    document.write("Si cuenta con hijos")
}else{
    document.write("no cuenta con elementos hijos")
}
/*}z
    hasChildNodes
        * Sirve para Determinar si un elemento cuenta con hijos (elementos)
        * Recordar que se puede hacer con if sin esecificar true o false
        * Recordar que si cuenta con texto tambien devolvera true por que texto hace parte de un elemento llamado text
*/

/////////////////////////////////////// Propiedades de parents (padres) ///////////////////////////////////////

let padre1 = contenedor.parentElement;
console.log(padre1);
/*
    parentElement
        * Devuelve lo que contiene el padre y todo su contenido 
        * Se recomienda usar este
*/


let padre2 = contenedor.parentNode;
console.log(padre2);
/*
    parentNode
        * Devuelve lo que contiene el padre y todo su contenido 
*/

///////////////////////////////////// Propiedades de siblings (Hermanos) /////////////////////////////////////
let siguienteHermano = h2_Nuevo.nextSibling; 
console.log(siguienteHermano);
/*
    nextSibling:
        *Muestra el elemento siguiente como hermano
        *Recordar que si tiene texto mostrar el texto ya que el texto hace parte de un elemento
*/

let anteriorHermano = h2_Nuevo.previousSibling; 
console.log(anteriorHermano);
/*
    previousSibling:
        *Muestra el elemento anterior como hermano
        *Recordar que si tiene texto mostrar el texto ya que el texto hace parte de un elemento
*/

let siguienteElementoHtmlHermano = h2_Nuevo.nextElementSibling; 
console.log(siguienteElementoHtmlHermano);
/*
    nextElementSibling:
        *Muestra el elemento siguiente como hermano
        *En este caso no muestra el texto como elemento si no que solo devuelve el elemento de html
*/

let anteriorElementoHtmlHermano = h2_Nuevo.nextElementSibling; 
console.log(anteriorElementoHtmlHermano);
/*
    previousElementSibling:
        *Muestra el elemento anterior como hermano
        *En este caso no muestra el texto como elemento si no que solo devuelve el elemento de html
*/

/////////////////////////////////////////////// Nodos - Extras ///////////////////////////////////////////////
// Seleccion el elemento accendente mas cercano que coincida con nuestro selector 

let div3 = document.querySelector(".div3");
let resdiv = div3.closest(".div")
console.log(resdiv)