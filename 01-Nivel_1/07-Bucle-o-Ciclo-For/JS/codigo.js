/*
    Bucle For (para) Español
        * Realiza un bucle una determinada cantidad de veces, es un bucle controlado por un contador, que de hecho, lo tiene implicito en su sintaxis
        * El for esta compuesto por 3 partes:
            * Iniciacilizacion de la variable, que utilizaremos en la condicion (se ejecuta solo una vez al principio del ciclo)
            * condicion de fin del ciclo (se evalua esta expresion al comienzo de cada iteracion).
            * Modificacion de la variable (se ejecuta al final de cada iteraccion).
         


*/

for (let i = 0; i < 12; i++) {
    if (i == 7) {
        break
    }
    document.write(`Estamos en el ciclo #${i} <br>`);
}
// Con el break pausamos el ciclo para que no se siga ejecutando
// Tener en cuenta que se define una varible en la condicional del for pudo haber sido var, o let

document.write(`<br><br>`);

for (let f = 0; f < 12; f++) {
    
    if (f == 6) {
        continue
    }
    document.write(`Estamos en el ciclo #${f} <br>`);
}
document.write("<br><br>");


// Con "continue" lo que hacemos es que decierta manera pausamos el codigo no se ejecuta lo que se determine en if pero el ciclo continuara con normalidad

