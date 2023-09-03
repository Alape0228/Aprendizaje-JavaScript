/*  
    Doom : modelo de objeto de documento

    Nodo:
        un nodo en el Doom es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista
            *Document:
                El nodo document es el nodo raiz, a partir del cual derivan el resto de nodos
            *Element:       value :1
                nodos definidos por etiquetas html
            *Text:          value :3
                El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto)
            *attributte:    value :2
                Los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, si no como informacion asociada al nodo de tipo element)
            *comentarios y otros: 
                Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos 
*/

/*  
    Document : Metodos de seleccion de elementos (es un objeto)

    *getElementById():
        Selecciona un elemento por ID

    *getElementsByTagName():
        Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
    
    *querySelector():
        Devuelve el primer elemento que coincida con el grupo especificado de selectores.
    
    *querySelectorAll():
        Devuelve todos los elementos que coincidan con el grupo especificado de selectores.   
*/

let parrafo1 = document.getElementById("parrafo1");
// En el parrafo1 se selecciona por id
let parrafo2 = document.querySelector(".parrafo2");
// En el parrafo2 se selecciona por clases usando . debido a que es una clase
let parrafos1 = document.getElementsByTagName("p")
// En parrafos1 se selecciona todas las etiquetas p
let parrafos2 = document.querySelectorAll(".parrafo2")
// En parrafos2 se selecciona todas las etiquetas con la clase ".parrafo2" 



document.write("De aqui en adelante es JavaScript <br><br>");
document.write(parrafo1 + "<br>");
// Se esta mostrando el parrafo1 seleccionado por id
document.write(parrafos1 + "<br>");
// Se esta mostrando conjunto de etiquetas de  p
document.write(parrafos1[0] + "<br>");
// No lo convierte en array
// se esta seleccionado de todo el conjunto de elementos p el primero 
// si en html se cuenta con 5 parrafos de etiqueta p se selecciono solo el primero
document.write(parrafo2 + "<br>");
// Se esta mostrando el parrafo2 seleccionado por el nombre de la clase
document.write(parrafos2 + "<br>");
// Se esta mostrando el conjunto de elementos con la clase ".parrafo2"
document.write(parrafos2[2] + "<br>");
// No lo convierte en array
// se esta seleccionado de todo el conjunto clases ".parrafo2" el tecero 


/*
    Metodos para Definir, obtener y Eliminar valores de atributos

        *setAttribute()
            Modifica el valor de un atributo

        *getAttribute()
            obtiene el valor de un atributo
        
        *removeAttribute()
            Remueve el valor de un atributo
*/


let ejemplo1 = document.querySelector(".rango");

ejemplo1.setAttribute("type","text")
// el elemento con clase rango era de tipo "range"
// fue modificada poniendo como primer parametro lo que se desea modificar y como segundo valor o propiedad a colocar nueva
// pero tambien se puede crear en caso de que no tengan

let valorAtributoEjemplo1 = ejemplo1.getAttribute("type");


document.write(ejemplo1 + "<br>")
document.write(valorAtributoEjemplo1 + "<br>")
// Sirve para obtener el atributo del elemento con la clase rango
// tener en cuenta los parametros ya que obtiene el valor que tiene el atributo type