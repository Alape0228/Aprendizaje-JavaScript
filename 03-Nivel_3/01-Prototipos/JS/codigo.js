/*
    Prototipos
        * Los objetos son creados basandose de prototipos ejem
            del prototipo persona podemos crear el objeto ingeniero o medico
            del prototipo de doctor podemos sacar objetos como especialistas medicos
        * Todos los prototipos tienen el objeto object que contiene todos los objetos

    .__proto__  = de esta manera accedemos al prototipo de un objeto que ya esta creado
    .Prototype  = de esta manera accedemos a los prototipos que nosotros hemos creado

    toda variable hasta un string contiene la propiedad __proto__ que contiene muchas mas propieades
    String 
    Number 
    array

    Cuando se crea una funcion se puede crear o se crea el prototipo


        * Prototype Chain
        * Protype Object
    
*/

let objeto = {
    "propiedad" : "datos" 
}
console.log(objeto.__proto__);

console.log("Ejemplo 1 :");

let variable = "ejemplo"
console.log(variable.__proto__);            //primer console log
console.log(variable.__proto__.__proto__);  //segundo console log
/*
    Esto contiene 2 prototipos
        * El tipo de dato  (string)
        * El prototipo objet (Prototype)
        
    Si notamos en el primer console log, notamos que en sus propiedades hay otro sub prototype del cual tambien
    se puede acceder con .__proto__.

    esto es con el fin de acceder a prototipos que ya vienen por defectos creados en el sistema
*/

let variable2 = function(){};
console.log("Ejemplo 2 :");
console.log(variable2.prototype);
/*
    Con la funcion creamos un prototipo y accedemos a el a traves de .prototype
    Cada ves que creamos una funcion el prototipo lo creamos nosotros
*/

/*
CARACTERISTICAS
    * un prototipo definido en su codigo fuente es mutable (lo podemos modificar)
    * Es en si mismo un objeto, asi como otros (puede tener funciones)
    * Tiene una existencia fisica en la memoria
    * puede ser modificado y llamado
    * puede ser visto como un modelo ejemplar de una familia objeto.
    * un objeto hereda propieades (valores y metodos) de su prototipo
*/