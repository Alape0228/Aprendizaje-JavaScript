/////////////////////////////////////// Funciones de Registro ///////////////////////////////////////
 
console.assert(5<3);  
/*
    assert()
        * Aparece un mensaje de error en la consola si la afirmacion es falsa. si la afirmacion es verdadera, no aparece nada. (NO ESTANDAR)
        * Sirve para revisar si una afirmacion es falsa para que nos genere un error
*/

console.clear()
/*
    clear()
        Limpia Toda la consola 
*/

console.error("Esto definitivamente es un error");
/*
    error()
        * Muestra un mensaje de error en la consola Web 
        * Sirve para enviar por parametros un mensaje de error mostrado en consola
*/

console.info("Esto es un mensaje informativo");
/*
    info()
        * Emite un mensaje informativo a la consola web. en firefox y chrome se muestra un pequeño icono "i" junto a estos elementos en el registro de la consola web. 
        * Sirve para enviar por parametros un mensaje iformativo mostrado en consola
        * Es parecido a console.log("") La diferencia es minima pero se recomienda .log

*/

console.log("Esto es otro mensaje informativo");
/*
    log()
        * Muestra un mensaje en la consola web (o del interprete JavaScript).
        * Sirve para enviar por parametros un mensaje iformativo mostrado en consola

*/

console.table(["Jose","1","David","2","Alape","3","Delgado","4","Mafe",["nose1","nose2",]]);
/*
    table()
        * Esta funcion toma un argumento obligatorio: data, que debe ser un array o un parametro adicional: columns y nos muestra una tabla en consola 
        * Solo sirve cuando en parametros se pasa objeto u arrays
*/

console.warn("Recuerda por favor realizar tal accion o no funcionara");
/*
    warn()
        * Imprime un mensaje de advertencia en la consola web. 
        * Sirve para enviar por parametros un mensaje iformativo mostrado en consola
*/

console.dir(["Jose","1","David","2","Alape","3","Delgado","4","Mafe",["nose1","nose2",]]);
/*
    dir()
        * Despliega una lista interactiva de las propiedades del objeto JavaScript icado. [NO ESTANDAR]
        * Sirve para mostrar de mejor manera los arrays u objetos en la consola
*/


//////////////////////////////////////// Funciones de Conteo ////////////////////////////////////////

console.count("ejemplo 1 ");
console.count("ejemplo 2 ");
console.count("ejemplo 3 ");
console.count("ejemplo");
console.count("ejemplo");
console.count("ejemplo");
/*
    count()
        * Registra el numero de veces que se llama a count(). Esta funcion toma como opcional una etiqueta. 
        * Si se ejecuta con parametros devuelve el valor de 1
        * Sirve como para contar cuantas veces ejecute el "console.count("ejemplo");" pero si el parametro es distinto no acumula 
*/

// console.countReset("ejemplo");
console.countReset();
console.count("ejemplo");
/*
    countReset()
        Resetea el contador console.count() 
        * Sirve para resetear el contador pero se debe tener en cuenta el parametro digitado
        * Se puede utilizar sin parametros en una funcion para determinar cuantas veces se ejecuto la funcion mientras se manejaba el programa
*/


///////////////////////////////////// Funciones de Agrupaciones /////////////////////////////////////


console.group("Frutas")
console.error("Tomate de error")
console.info("Naranja de infor");
console.group("marcas")
console.error("Hp")
console.info("Samsung");
/*
    group()
        Crea un nuevo grupo en linea en el registro de la consola web.
        * Sirve para crear un tipo de grupo en la consola que se permite abrir y cerrar 
        * Pero todo lo que se ejecute en consola de ahi para abajo quedara dentro de ese console.group
        * Por parametros podemos nombrar el grupo como deseemos
*/

console.groupEnd("Frutas")
console.groupEnd("marcas")
console.group("nose")
console.groupEnd("nose");
/*
    groupEnd()
        Remueve un grupo en linea en el registro de la consola web. 
        * Sirve como un break en un ciclo cierra el grupo para que cuando se siga ejecutando la consola o creando un nuevo grupo este sea independiente del grupo anterior y no se los siga anclando
*/

console.groupCollapsed("zapatos");
console.info("nose que decir aca");
console.groupEnd("zapatos");
/*
    groupCollapsed()
        * Crea un grupo en linea pero contraido. El usuario debe expandirlo para verlo
        * Es mas util debido a que en ves de crear un grupo abierto lo hace cerrardo
*/

///////////////////////////////////// Funciones de Temporizacion /////////////////////////////////////

console.time()
/*
    time()
        inicia un temporizador
*/

console.timeLog()
/*
    timeLog()
        Detiene un temporizador
*/

console.timeEnd()
/*
    timeEnd()
        Registra el valor actual de un temporizador
*/

// Se puede utilizar sin parametros en una funcion para determinar cuanto demoro la ejecucion la funcion mientras se manejaba el programa


/*
    Manejo de la consola
    entre comillas "%c"
*/

console.log("%c Creado por: JOSE DAVID ALAPE DELGADO","color:white; background:black; padding:30px; border-radius:40px; font-size:20px; border: 5px solid blue;");

