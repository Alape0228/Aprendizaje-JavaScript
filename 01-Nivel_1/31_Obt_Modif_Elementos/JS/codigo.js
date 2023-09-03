/*
    Obtencion y Modificacion de Elementos
        *textContent
            devuelve el texto que contiene algun elemento

        innerHTML 
            devuelve el contenido html de un elemento (tambien sirve para agregar contenido)

        outerHTML
            devuelve el codigo HTML completo del elemento desde su origen

*/

let titulo = document.querySelector(".titulo")

document.write(`<h3 style = "margin: 0px;" >Ejemplo1 textContent</h3>`)
let resultado1 = titulo.textContent
document.write(resultado1 + "<br><br>")
/*
    *textContent
        * devuelve el texto de cualquier nodo
        * Nos devuelve lo que tiene adentro la etiqueta sin el html o sea las etiquetas
*/

document.write(`<h3 style = "margin: 0px;" >Ejemplo2 innerHTML</h3>`)
let resultado2 = titulo.innerHTML
document.write(resultado2 + "<br><br>")
alert(resultado2)
/*
    *innerHTML 
        * devuelve el contenido html de un elemento
        * Si lo mostramos en un alert nos mostraria todo el codigo html
*/

document.write(`<h3 style = "margin: 0px;" >Ejemplo3 outerHTML</h3>`)
let resultado3 = titulo.outerHTML
document.write(resultado3 + "<br><br>")
alert(resultado3)
/*
    *outerHTML
        devuelve el codigo HTML completo del elemento
        * Si lo mostramos en un alert nos mostraria todo el codigo html incluso con su contenedor
*/

