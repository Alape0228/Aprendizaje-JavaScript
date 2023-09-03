/*
    JavaScript:
        * Utilizado principalmente para la creacion de paginas y aplicaciones web dinamicas.
        * Permite cambios y animaciones web
        * se ejecuta principalmente del lado del cliente en navegador web que es encargado de interpretarlo
     
    Que podemos hacer?
        * Validar datos de un formulario (formato email - que se haya completado todos los campos, etc)
        * Mostrar mensajes o advertencias
        * Hacer Galeria de imagenes dinamicas
        * Abrir Ventanas
        * Abrir Pestañas
        * Realizar efectos
        * Mover objetos
        * Cambiar la resolucion de una web
        * entre otros
        
    Consejos o tips 
        * Si ejecutamos en el html el "<script> en el header eso hara que se ejecute antes o en el body si se requeire que se ejecute en el momento"

    Tipos de variables
        var:
            es un tipo de variable que sin importar donde declaremos sea dentro de un bloque una funcion o demas vamos a poder acceder desde cualquier lugar de nuestro codigo acceso total
        let:
            es un tipo de variable particular que podemos utilizar solo dentro de un bloque de codigo en particular o en un conjunto en especifico y en particular que solo se podra utilizar dentro de ese bloque fuera no funcionara
        const   = 
            esn un tipo de variable de manera constante y no se permite cambiar

    Tipos de Datos que almacenan las variables :
        *Numericos : Para valores numericos
            *Number
            *BigInt : para valores mayores que 9007199254740991 o menores que -9007199254740991 
        *String:
            "Cadena de texto" 
        *Boolean:
            (0 o 1) (true o false ) falso y verdadero
        *Null:
            Cuenta con un valor llamado null indicando que la variable tiene un valor de 0 o vacia de manera intencional la declaramos vacia
        *Undefined:
            Se utiliza para variables si existen pero no tiene ningun valor definido

        
*/

var nombre = "Jose David"; 
var edad = 25;
var presenteono = false;
var apellido = null;

// Concatenar con "+"

alert("Mi nombre es " + nombre + " Mi Edad es " + edad + " Estoy presente ? " + presenteono + " Tengo apellido ? " + apellido);
// Imprime como alerta en la pagina



console.log("Mi nombre es " + nombre + " Mi Edad es " + edad + " Estoy presente ? " + presenteono + " Tengo apellido ? " + apellido);
// Imprime en la consola del navegador

console.log (typeof nombre);
// typeof sirve para saber que tipo de dato almacena la variable nombre



if (true){
    var ejemplo1 = "ejemplo1"; 
}
console.log(ejemplo1);

if (true){
    let ejemplo2 = "ejemplo2"; 
}
console.log(ejemplo2);

// como la variable fue iniciada y declara dentro del if solo funcionara dentro de ese if y fuera de la misma ya no funciona

const ejemplo3 = "josedavid112009@gmail.com";

ejemplo3 = "cambio";

console.log(ejemplo3);

// Genera error por que si ya le asignamos un valor constante a la variable ejemplo3 no se la podemos cambiar despues


// Tambien se pueden declarar multiples variables en una linea de codigo

// Ejemplo1
var numero1, numero2, numero3;

numero1 = 10;
numero2 = 20;
numero3 = 30;
console.log(numero1, numero2, numero3);

// Ejemplo2

var numero10=10, numero20=20, numero30=30;
console.log(numero1, numero2, numero3);

// Ejemplo3

var numero100 = 10;
var numero200 = 20;
var numero300 = 30;
console.log(numero1, numero2, numero3);
