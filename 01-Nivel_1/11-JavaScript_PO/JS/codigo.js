/*
    Clases:
        Es como una plantilla o fabrica de objetos, las clases sirven para crear objetos

    Objetos:
        Son los objetos o el resultado que crea las clases 
    
    Metodo:
        Son las cosas que puede hacer nuestro objeto

    Constructor
        Es una funcion obligatorio en las clases que nos va permitir construir las propiedades del objeto
*/

class animal {
    constructor(especie,edad,color){
        this.caracteristica = especie;
        this.propiedad = edad;
        this.atributo = color;
        this.informacion = `
            Soy un ${this.caracteristica}, tengo ${this.propiedad} años y soy de color ${this.atributo}`;
    }
        // La manera correcta de hacer un metodo 
        // Metodo es exactamente lo mismo que una funcion solo que va dentro de una clase
    verInformacion(){
        document.write(this.informacion);
    }
    // se llama al objeto con lo que contiene dichas propiedades ya fueron declaradas en el let de abajo "perro"
    // el this solo funciona dentro de la clase
}
/*
    this: (el objeto)
        Viene siendo como los objetos creados, que pueden ser como una especie de caracteristica, propiedad y/o atributo
    
    Consejo: 
        Cuando se trabaje con objetos usar "const" en ves de let
        revisar mejor en consola que en pantalla document.write():
*/

let perro = new animal("perro",5,"rojo");
let gato = new animal("gato",10,"amarillo");
let loro = new animal("loro",15,"verde");

console.log(perro);

// Perro va ser igual a un objeto de la clase animal
// se dan parametros al objeto animal, para definir las (propiedades) atributos o caracteristicas

document.write(perro.atributo + "<br>");
document.write(perro.informacion + "<br>");
document.write(gato.informacion + "<br>");
document.write(loro.informacion + "<br>");
document.write("<br><br>");

// estamos llamando la propiedad de perro que es le objeto
// si se llama un objeto creado y tiene 5 propiedades pero de esas 5 propiedades solo se le declararon los valores a 4 por parametros, al llamarla no funcionara por que aun faltaria definirle un valor a la propiedad faltante ejem "document.write(loro);" no funcionaria por que no se ha definido un valor a la propiedad informacion en el let 38
// para el caso anterior se debe llamar el objeto y la propiedad aparte



// la manera correcta de llamar un metodo de un objeto o clase
perro.verInformacion()