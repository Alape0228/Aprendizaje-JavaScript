// El for "in" y for "of" es un tipo de bucle que sirven especializado par a los objetos

let animales = ["perro", "gato", "loro", "serpiente", "conejo"];

for (contador in animales) {
    //document.write(contador + "<br>"); //ejemplo1
    document.write(animales[contador] + "<br>"); //ejemplo2
}
/*
    For in:    
        si se llama al contador, el nos mostrara las posiciones que cuenta el objeto (en el ejemplo1 )

        Si se quiere llamar lo que contiene la posicion se debe llamar al objeto con el contador como el ejemplo2 (Esto se debe que para mostrar el contenido de un objeto se hace asi objeto[1] y se muetra lo que contiene el objeto en la posicion 1 debido a que el contador nos muestra la posicion eso nos permite que nos funcione el codigo)

        ademas de contador tambien toma el nombre de las propiedades de los objetos
*/

document.write("<br>");

for (cont of animales) {
    document.write(cont + "<br>");
}

/*
    For of:    
        si se llama al contador, el nos mostrara lo que cuenta la posicion que cuenta el objeto en ves de (1,2,3) (perro,gato,loro)

        Ademas de lo que contiene el objeto tambien muestra lo que contiene las propiedades de los objetos
*/


document.write("<br><br>");


let array1 = ["Maria","Fernanda","Florez","Guzman"];
let array2 = ["Jose","David","Alape","Delgado",array1];

for (let i in array2) {
    if (i == 2) {
        for (let i of array1) {
            document.write(i + "<br>");
        }   
    }else {
        document.write(i + "<br>");
    }
}

/* 
    El ciclo funciona de la siguiente manera:
    
    inicia mostrando las posiciones por el bucle "in" 0 - 1  del array2
    Cuando llega a la posicion 2 ingresa a otro bucle esta ves con "of" mostrando todo lo que hay dentro del primer arra1 
    pero como el array2 cuenta con 5 posiciones el ciclo continua mostrando el resto de posiciones 3 - 4
    
*/


/*
    Con continue en el segundo ciclo2 lo que sucedera es que pausara todo ese ciclo y hara continuar el ciclo principal

    for (let i in array2) {
        if (i == 2) {
            for (let i of array1) {
                document.write(i + "<br>");
                continue;
            }   
        }else {
            document.write(i + "<br>");
        }
    }
*/

/*
    a menos de que declaremos un else if indicando que despues del ciclo 2 (3 - 4) no se muestren por que son pausados por el break

    for (let i in array2) {
    if (i == 2) {
        for (let i of array1) {
            document.write(i + "<br>");
        }   
    }else if (i > 2 ) {
        break;
    }else {
        document.write(i + "<br>");
    }
    }
*/

/*
    forRancio; Esta funcion por asi decirlo detiene todos los ciclos dependiendo de donde se es colocado 
    
    for (let i in array2) {
    if (i == 2) {
        for (let i of array1) {
            document.write(i + "<br>");
        }   
    }else {
        document.write(i + "<br>");
        forRancio;
    }
    }

*/