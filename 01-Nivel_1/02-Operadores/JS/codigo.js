/*
    Operadores Aritmeticos

    suma                                = 25 + 50
    Resta                               = 25 - 50 
    Multiplicacion                      = 25 * 50
    Division                            = 25 / 50
    Modulo % (Resto de una division)    = 30 % 2 (se usa mas que todo para saber si su reciduo es par o impar)
    Incremento                          = 10++
    Decremento                          = 10--
        
    
    Operadores de Comparacion: 
    
    Igualdad                        = ==
    Desigualdad (distinto)          = !=
    Igualdad Estricta               = ===       = Valida si el contenido es el mismo y si el tipo de dato es igual     
    Desigualdad Estricta            = !==
    Mayor y menor                   = ><
    Mayor o igual y menor o igual   = >= <=

    
    Operadores Condicionales o Logicos          //retornan (true / false)

    AND = &&    = Se utiliza cuando se deben cumplir ambas condiciones 
    falso y falso es igual a falso
    OR  = ||    = Se utiliza cuando se debe cumplir una condicion u otra 
    NOT = !:    = Se utiliza para negar el valor de una condicion (si es true para ser false y viceversa)
*/


var suma = 50 + 25;
console.log("Resultado de una suma 50 + 25 = " + suma);

var resta = 50-25;
console.log("Resultado de una resta 50-25 = " + resta);

var multiplicacion = 50*25;
console.log("Resultado de una multiplicacion 50*25 = " + multiplicacion);

var division = 50/25;
console.log("Resultado de una division 50/25 = " + division);

var resto = 50%10;
console.log("Reciduo de la deicions de 50/10 = " + resto);

console.log("5 es mayor a 2 ? " + (5>2));
console.log(5>2);

console.log("10 es menor a 5 ? " + (10<5));
console.log(10<5);

console.log("10 es igual a 10 ? " + (10==10));
console.log(10==10);

// Ejemplo y and 
var edad =18;
var cedula = false;
var tarjetaid = !false;
// Este ultima convierte el falso en verdadero


console.log("la persona tiene mas de 18 años y lleva la cedula ? " + (edad >= 18 && cedula==true));
console.log(edad >= 18 && cedula==true);
// si la persona no cumple con ambos requisitos generara un false

// caso contrario
console.log("la persona tiene mas de 18 años o lleva la cedula ? " + (edad >= 18 || cedula==true))
console.log(edad >= 18 || cedula==true);


/*
    Operadores de Asignacion:

        Nombre                                                  Abreviaciones   Significado

        Asignacion                                              = x = y         x = y                                 
        Asignacion de adiccion                                  = x += y        x = x + y
        Asignacion de sustraccion                               = x -= y        x = x - y
        Asignacion de multiplicacion                            = x *= y        x = x * y
        Asignacion de division                                  = x /= y        x = x / y
        Asignacion de Resto                                     = x %= y        x = x % y
        Asignacion de Exponenciacion                            = x **= y       x = x ** y
        Asignacion de deplazamiento a la izquierda              = x <<= y       x = << y
        Asignacion de deplazamiento a la derecha                = x >>= y       x = >> y
        Asignacion de sin signo de deplazamiento a la derecha   = x >>>= y      x = >>> y
        Asignacion de AND                                       = x &= y        x = x & y
        Asignacion de XOR                                       = x ^= y        x = x ^ y
        Asignacion de OR                                        = x |= y        x = x | y

*/

var numero = 10;
var numero2 = "20";
numero += 5;

document.write(numero);

// Concatenar unir variables para mostrarlas
// .concat(""); recordar que para utilizar la funcion debe contener por lo menos un string y dentro de la funcion .concat(""); debe haber dentro un numero 

var numeroejemplo1 = 10;
var numeroejemplo2 = "20";

var frase = numeroejemplo2.concat(numeroejemplo1);
document.write(frase);

var frase1 = "Hola Mi nombre es ";
var frase2 = 356;

var frasefinal = 
`<br> 
${frase1} <br>  
<h1>David Alape </h1><br>
y tengo ${frase2} Viviendo aca en españa`;

document.write(frasefinal);

// Otra manera de concatenar es con Alt + 96 ``
// y usando ${poner la variable que quiera}


// Ejercicio  con operadores Condicionales o Logicos

num1 = 10;
num2 = 20;
num3 = 30;
num4 = 40;
num5 = 50;

op = (num5 > num2 && num4 < num3) || (! (num1 === num2) || num3 != num3);
// (true && false) || (!false || false )
// false || (true || false)
// false || true
// true

document.write(`<br> ${op}`);
