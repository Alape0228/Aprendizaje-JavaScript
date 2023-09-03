/*
    filter()
        crea un nuevo array con todos los elementos que cumplan la condicion
    forEach()
        Ejecuta la funcion indicada una vez por cada elemento del array
*/

let ejemplo1 = ["ejemplo1","ejemplo2","ejemplo3","ejemplo4","ejemplo5","ejemplo6"];

ejemplo1.filter(
    (ejem) => {
    document.write(ejem + "<br>")
})
document.write("<br>");

/*
    Es como un tipo de bucle que recorre los elementos de un array
    filter recibe como parametro una funcion
*/

let ejemplo2 = ["ejemplo1","ejemplo2","ejemplo3","ejemplo4","ejemplo5","ejemplo6"];

ejemplo2.forEach(
    (ejem) => {
    document.write(ejem + "<br>")
})

// El Foreach funciona exactamente igual

document.write("<br>");

//  Otro ejemplo que se puede hacer con filter
animales = ["perro","toro","vaca","serpiente","loro","gato"];

resultado = animales.filter(ejem2 => ejem2.length > 4)
document.write(resultado);
// Crea un nuevo array llamado resultado con solamente los elementos que cumplan con la condicion lo que retorne mas bien
 
