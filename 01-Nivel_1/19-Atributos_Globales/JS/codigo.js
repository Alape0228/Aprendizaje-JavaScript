/*

Esto es para implementar atributos al codigo html5

    Atributos Globales: que aplican a todas las etiquetas de html
        *class:
            Lista de clases del elemento separadas por espacios
        
        *id:
            define un identificador unico

        *contentEditable:
            indica si el elemento puede ser modificable por el usuario (bool)

        *dir:
            indica la direccionalidad del texto

        *hidden:
            indica si el elemento aun no es, o ya no es, relevante.
        
        *style:
            contiene declaraciones de estilo css para ser aplicadas al elemento
        
        tabindex:
            indica si el elemento puede obtener un focus de input

        title:
            Contiene un texto con informacion relacionada al elemento al que pertenece
*/


let titulo1 = document.querySelector(".titulo1");
titulo1.setAttribute("contentEditable","true");
// con contentEditable le permitimos al usuario que pueda modificar los textos de la pagina web temporalmente y true lo activa


let titulo2 = document.querySelector(".titulo2");
titulo2.setAttribute("dir","rtl");
// left to right es el segundo parametro que es el comun no cambia nada
// right to left es el segundo parametro que es el comun no cambia nada
// pero no se recomienda usarlo por que para eso se usa css

let titulo3 = document.querySelector(".titulo3");
titulo3.setAttribute("hidden","true");
// El elemento se oculta
// si se coloca el atributo hidden indiferentemente que se ponga false o true se seguira ocultando

let titulo4 = document.querySelector(".titulo4");
titulo4.setAttribute("tabindex","1");
// Sirve para enfocar el elemento con el tabulador en la pagina web
// Su segundo parametro debe ser numero ya que es el orden por el cual se selecciona por el tabulador
// No funciona con la etiqueta <h1></h1>

let titulo5 = document.querySelector(".titulo5");
titulo5.setAttribute("title","He cambiado el texto xD");
// Sirve para sacar un pequeño texto si se pone el cursor encima
// Su segundo parametro lo que quiere que aparezca de texto

