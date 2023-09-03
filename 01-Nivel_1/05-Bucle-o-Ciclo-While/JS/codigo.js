/*
    Bucle While (Mientras) Español
        *Permite ejecutar un bloque de codigo en forma repetitiva "mientras" el (while) o la condicion se cumpla
        *La condicion se evalua SIEMPRE al inicio de ciclo/bucle
        *cuando se deje de cumplirse la condicion, el programa sale del bucle y continua con el resto del programa 

*/
var contador = 0;


while (contador <= 5) {
    console.log("te amo amor mio" + contador);
    contador++
}

// Maneras de pausar un bucle "break;"
// 01
var i = 0;

while (i <= 100) {
    document.write(i);
    i++;
    if (i == 10) {
        break;
    } 
}

