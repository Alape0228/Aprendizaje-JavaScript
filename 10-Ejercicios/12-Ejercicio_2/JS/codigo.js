/*
    Crear mini-sistema para registrar 
    presentes (p) asistencias (a)
    pasados 30 Dias mostrar la situacion final de todos los alumnos
    maximo 10% de ausencias por semana o delcarar que estas reprobado

*/

let nose = prompt("Cuantos Alumnos hay en la clase");
let almunos = [];


for (i = 0; i < cantidadAlumnos; i++) {
    almunos[i] = [prompt("Por Favor Digita el nombre del alumno " + (i + 1)),0]   
}
/*
    almunos[i] = [David,0]
        almunos[0] = David,0  Con cada ciclo en la posicion 0 alimenta array con David y 0
        almunos[1] = Maria,0  Con cada ciclo en la posicion 1 alimenta array con Maria y 0
        almunos[2] = Amor,0   Con cada ciclo en la posicion 1 alimenta array con Amor y 0
    
    almunos[i] = [nombre , Asistencia Diaria]
    almunos[i] = [David, 0]
*/

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        almunos[p][1]++;
    }
}
/*
    Se crea funcion llamada "tomarAsistencia" donde se le pasan los valores de nombre y p que es la assitencia
    almunos[p]
        estamos llamando al conjunto o array alumnos en la posicion 1 que vienen siendo las asistencias 
        El array o conjunto almunos[p] toma la variable p ya definida en la funcion que son las asistencias y las aumenta en caso de que si sea presente
*/

for (let i = 0; i < 30; i++) {
    for (contador in almunos) {
        tomarAsistencia(almunos[contador][0],contador);
    }  
}
/*
    * Lo que se realiza es un bucle 30 Veces por los 30 Dias en donde estaremos llamando la funcion 
    * Inicia el Ciclo 1 Del Primer Dia 
    * Inicia junto con el ciclo de los alumnos dependiendo de la cantidad de alumnos registrados anteriormente por eso el ciclo dentro de otro ciclo
    * Se da la siguiente informacion a la funcion para que funcione
    
    tomarAsistencia(almunos[contador],contador)
        tomarAsistencia(David0,0)
    * Cuando la funcion arranca  let presencia = prompt(nombre); captura "presencia" mostrando el nombre y 0 que es el segundo elemento capturado en el array ya enviado en el for del estudiante

    tomarAsistencia(almunos[contador][0],contador);
        tomarAsistencia(David,0)
    * Cuando la funcion arranca  let presencia = prompt(nombre); captura "presencia" mostrando solo el nombre y en este caso ya no toma 0 debido a que se especifico que solo sea capturado mostrado o nombrado la posicion 0 que es el nombre no mas
        
    tomarAsistencia(almunos[contador][0],contador);
        tomarAsistencia(David,0)
    * Cuando la funcion arranca en el array o conjunto almunos[p][1]++; en la posicion 1 que son las asistencias y 0 el nombre de los estudiantes que a la ves el resultado es 0 enviado por el for aumenta 1 cada ves que el usuario dice presente
*/

for (contador in almunos) {
    let resultado = `${almunos[contador][0]}: <br>
    Asistencias : ${almunos[contador][1]}<br>
    Ausencias :  ${30 - almunos[contador][1]}<br>
    `
    if (30 - almunos[contador][1] > 18) {
        resultado += " Usted Acaba de reprobar el curso por muchas inasistencias";
    }
    else{
        "<br><br>"
    }
    document.write(resultado);
}

// Es bueno indicar cuando hay varios conjuntos o array especificar la posicion almunos[contador][0] indicando que se quiere almunos[David] o almunos[contador] almunos[David0]

/*
    

    0,0 David 0

    1- Se requiere un array para que almacene el nombre de los estudiantes
    2- se requiere un ciclo para que pregunte y tome el nombre de los estudiantes
    3- no se declaran variables let dentro del ciclo por que son necesario usarlas fuera del ciclo
    4- se pone i + 1 es para indicar el numero del alumno que va digitar el nombre
    5- un conjunto almacena el conjunto del nombre y asistencia (0)
    
    1 array = almunos
    en cada ciclo el nombre del estudiante que se registra en un array




    Arrays
        ejemplo:
            alumnosTotales[i][2] = nose 
                el 2 indica que desea tomar el 3 bloque o array o conjunto o elemento 
        
        lucas, 0, nose
        Pedro, 0, talves
        matias, 0, siempre
*/


/*
    cantidadAlumnos = Cantidad de alumnos que se registraran en la clase

*/