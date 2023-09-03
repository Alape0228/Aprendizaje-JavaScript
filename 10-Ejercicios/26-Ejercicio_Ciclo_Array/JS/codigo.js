/*
    Quiere saber si aprueba o reprueba alguna materia
    necesita almenos el 90% de asistencias
    promedio por materia 7 de 10
    minimo 75% de trabajos entregados

    * Solicitar datos para saber si aprueba o no
    * Mostrar todo con colores por consola
    
    a pesar de tener el 95% de asistencias teniendo un promedio 7 de 10
    no cree llegar el 75% de trabajos a tiempo necesita dividir las tareas semanalmente
    cofla trabaja 8 horas al Dia por semana
    24 horas para estudiar - 
    24 horas para hacer trabajos - 
    56 horas para trabajar - 
    8 Horas para hacer las cosas de la casa 
    
    * Organizar Diaraimente las tareas
    * Utilizar la consola para organizar
    * Cada tarea no debe superar las 4 Horas  
*/


let asignaturas = [
    [["nombre :"],["trabEntregados : "],["asistencias : "],["evaluacion : "]],
    [["nombre :"],["trabEntregados : "],["asistencias : "],["evaluacion : "]],
    [["nombre :"],["trabEntregados : "],["asistencias : "],["evaluacion : "]],
]


for (let i = 0; i < 3; i++) {
    asignaturas[i][0].push(prompt("materias"))
    for (j = 0; j < 6; j++) {
        asignaturas[i][1].push(prompt("Digita por favor las notas de tus 6 trabajos"))
    }
    for (j = 0; j < 5; j++) {
        asignaturas[i][2].push(prompt("Digita por favor las asistencias, de todos los dias de la semana true = asistio, false = no asistio"))   
    }
    for (j = 0; j < 1; j++) {
        asignaturas[i][3].push(prompt("Digita por favor la nota final de la evaluacion"))   
    }
}
console.log(asignaturas)

// document.write(asignaturas + "<br>")                     //Todo el array
// document.write(asignaturas[0] + "<br>")                     //Todo el array 1 toda la materia
// document.write(asignaturas[0][0] + "<br>")                     //Todo el array nombre 
// document.write(asignaturas[0][1] + "<br>")                     //Todo el array de trabajos entregados
// document.write(asignaturas[0][2] + "<br>")                     //Todo el array de asistencias
// document.write(asignaturas[0][3] + "<br>")                     //Todo el array de evaluacion

/*
//////////////////////////////// Explicacion del Codigo ////////////////////////////////

    1- primer se aconseja diseñar el array, y luego establecer o conocer el como llamar cada una de las posiciones del array
    2- Luego de plenear el array se diseña el ciclo
    3- se establece el primer ciclo de 3 veces por que se establecera 3 materias
        3.1 El array asignaturas[i][0] va recorrer todo el array 0,1,2 pero en la posicion [0] que hace parte del "nombre"
            asignaturas[i][0] = asignaturas[0][nombre]
            asignaturas[i][0] = asignaturas[1][nombre]
            asignaturas[i][0] = asignaturas[2][nombre]
    4- Se crea un segundo ciclo dentro del primero esto por que debemos aprovechar que el ciclo esta recorriendo cada una de las materias asignaturas[i]
        4.1 El array asignaturas[i][1] va recorrer todo el array 0,1,2 pero en la posicion [1] que hace parte "trabEntregados"
            asignaturas[0][1] = asignaturas[0][trabEntregados]
            asignaturas[1][1] = asignaturas[1][trabEntregados]
            asignaturas[2][1] = asignaturas[2][trabEntregados]
        4.2 Lo que hara el ciclo es que cada ves que llegue a dicha posicion agregue datos al array con la funcion .push(prom("trabajos")) 
    5- Se crea un tecer ciclo dentro del primero esto por que debemos aprovechar que el ciclo esta recorriendo cada una de las materias asignaturas[i]  
        5.1 El array asignaturas[i][2] va recorrer todo el array 0,1,2 pero en la posicion [2] que hace parte "asistencias"
            asignaturas[0][2] = asignaturas[0][asistencias]
            asignaturas[1][2] = asignaturas[1][asistencias]
            asignaturas[2][2] = asignaturas[2][asistencias]

    asignaturas[i][1]

*/


