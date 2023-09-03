/////////////////////////////////////////// Creacion de Elementos ////////////////////////////////////////////
/*
    createElement()
        Sirve para crear un elemento en () va el nombre del elemento que se desea crear debe ser en mayusculas
    
    createTextNode()
        Sirve para crear contenido o texto dentro de un elemento

    appendChild()
        Sirve para asignar un texto contenido o valor como hijo de un elemento en () va la variable a la cual dejaremos como hijo  
*/





// Debe ser todo en mayuscula
document.write(`<h3 style = "margin: 0px;" >Ejem1 createElement()</h3>`)
let item = document.createElement("LI")
document.write("mirar por consola")
console.log(item)
/*
    *createElement()
        * Sirve para crear un elemento
*/

document.write(`<h3 style = "margin: 0px;" >Ejem2 createTextNode()</h3>`)
let textoItem = document.createTextNode("Esto es texto creado que puede servir para un elemento")
document.write("mirar por consola")
console.log(textoItem)
/*
    *createTextNode()
        * Sirve para crear contenido o texto dentro de un elemento
        * 
        * es una frase que te dices a ti mismo
*/

item.appendChild(textoItem);
/*
    *appendChild()
        * Sirve para que a la variable item donde se creo el elementro se le agregue como hijo el texto textoItem que es la variable que almacena el texto        
*/

let contenedor = document.querySelector(".contenedor")
contenedor.appendChild(item);
/*
    *appendChild()
        * La variable item que contiene el elemento Li se la estamos agregando como hijo 
        * a la variable contenedor que es el elemento div         
*/

let contenedor2 = document.querySelector(".contenedor2")
let fragmento = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    let item2 = document.createElement("LI") //Elemento unico
    item2.innerHTML = `Texto Repetitivo ${i}`;
    fragmento.appendChild(item2)
}

console.log(fragmento) // Se puede revisar de esta manera mientras no se haya pasado como hijo al contenedor
contenedor2.appendChild(fragmento)

document.write(contenedor2)


/*
    createDocumentFragment()
    Se debe usar para crear como grupos de elementos creados con el fin de agregarlos a un elemento en especifico, Ejem (Si creamos un for o creamos 3 Elementos tipo li y van dentro de un elemento Div Se crean los elementos dentro de createDocumentFragment() y luego estos son pasados al div para no gastar tantos recursos)

        1 - Crear una variable donde se almacene el fragmento
        2 - Crear ciclo y/o crear los elementos unicos 
        3 - pasar o almacenar los elementos creados a la variable fragmento (se declara como hijo los elementos y como padre a la variabe fragmento)
        4 - Finalmente ya que todo quedo almacenado en la variable fragmeto convertirlo en hijo y pasarle los elementos o dicha informacion a la variable donde se amacene el contenedor o el elemento deseado

    * Con innerHTML mas que mostrar el contenido de un elemento tambien se puede incorporar contenido a dicho elemento
    * Pero se recomienda con un item2.textContent que es el metodo que se tiene mas especificado para dicha funcion
    
    * Es mas practico el uso de item2.textContent a crear un document.createTextNode y luego incorporarlo al elemento

    *Los elementos que se crean son objetos, y no se recomienda crear mas de un elemento unico 
*/


/*
    Consola de comandos del navegador para consultar la velocidad    
    Network ms

*/