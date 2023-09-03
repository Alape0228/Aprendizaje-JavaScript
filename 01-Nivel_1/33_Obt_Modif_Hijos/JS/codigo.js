/*
    Obtencion y modificacion de childs (Hijos)
        *firstChild
            Sirve para obtener el primer hijo del elemento seleccionado (padre) (puede incluir elemento texto)
            Si se imprime y hay algun tipo de espacio el sistema lo tomara como texto y el texto es un elemento
            Si se elimina todo tipo de espacios mostrara el primer hijo del elemento
        
        *lastChild
            Sirve para obtener el ultimo hijo del elemento seleccionado (padre) (puede incluir elemento texto)
            Si se imprime y hay algun tipo de espacio el sistema lo tomara como texto y el texto es un elemento
            Si se elimina todo tipo de espacios mostrara el primer hijo del elemento
        
        *firstElementChild
            Sirve para obtener el primer hijo del elemento seleccionado (padre) (solo elementos NO TEXTOS)
            No importa si hay texto intermedio de ambos elementos
        
        *lastElementChild
            Sirve para obtener el ultimo hijo del elemento seleccionado (padre) (solo elementos NO TEXTOS)
            No importa si hay texto intermedio de ambos elementos
        
        *childNodes
            Nos muestra los nodos hijos 
            Imprime como un conjunto de todos los nodos (text,h2,text,h1,text,p,text,)
            no es un array es un nodlist
            Se puede llamar buscar o encontrar un elemento en especifico del grupo como un array
        
        *children
            De los hijos nos muestra son las etiquetas html (h1,h2,p) 
            No se puede recorrer con un foreach a diferencia del anterior
            Se puede rrecorrer su contenido con un for of
*/

let contenedor = document.querySelector(".contenedor") 

let primerHijo = contenedor.firstChild;
console.log("Ejemplo 1 con firstChild : " , primerHijo)
/*
    firstChild
        *Sirve para obtener el primer hijo del elemento seleccionado (padre) (puede incluir elemento texto)
        *Si se imprime y hay algun tipo de espacio el sistema lo tomara como texto y el texto es un elemento
        *Si se elimina todo tipo de espacios mostrara el primer hijo del elemento
*/

let ultimoHijo = contenedor.lastChild;
console.log("Ejemplo 2 con lastChild : " , ultimoHijo)
/*
    lastChild
        *Sirve para obtener el ultimo hijo del elemento seleccionado (padre) (puede incluir elemento texto)
        *Si se imprime y hay algun tipo de espacio el sistema lo tomara como texto y el texto es un elemento
        *Si se elimina todo tipo de espacios mostrara el primer hijo del elemento
*/

let primerHijo2 = contenedor.firstElementChild;
console.log("Ejemplo 3 con firstElementChild : " , primerHijo2)
/*
    firstElementChild
        *Sirve para obtener el primer hijo del elemento seleccionado (padre) (solo elementos NO TEXTOS)
        *No importa si hay texto intermedio de ambos elementos
*/

let ultimoHijo2 = contenedor.lastElementChild;
console.log("Ejemplo 3 con lastElementChild : " , ultimoHijo2)
/*
    lastElementChild
        *Sirve para obtener el ultimo hijo del elemento seleccionado (padre) (solo elementos NO TEXTOS)
        *No importa si hay texto intermedio de ambos elementos
*/

let hijos = contenedor.childNodes;
console.log("Ejemplo 4 con childNodes : ")
console.log(hijos)
console.log("Ejemplo 4 con childNodes : Esta ubicando al elemento 3 ")
console.log(hijos[3])
// hijos.forEach(ejemplo => console.log(ejemplo));
// asi podriamos recorrerlo con un foreach
/*
    childNodes
        *Nos muestra los nodos hijos 
        *Imprime como un conjunto de todos los nodos (text,h2,text,h1,text,p,text,)
        *no es un array es un nodlist
        *Se puede llamar buscar o encontrar un elemento en especifico del grupo como un array
*/

let hijosHTML = contenedor.children;
console.log("Ejemplo 5 con children : " , hijosHTML)
// for (const i of hijosHTML) {
//     console.log(i)
// }
// asi podriamos recorrerlo con un for of
/*
    children
        *De los hijos nos muestra son las etiquetas html (h1,h2,p) 
        *No se puede recorrer con un foreach a diferencia del anterior
        *Se puede rrecorrer su contenido con un for of
*/




