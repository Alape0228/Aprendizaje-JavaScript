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

// materias = {
//     0matematicas: [
//       01["Trabajos entregados(6)"],
//         ["Asistencias(6)"],
//         ["Evaluacion (0-10) "]]
// }

let porcentaje = 75;
let totalTrabajosEntregados = 60;
let porcTrabajos = (porcentaje * totalTrabajosEntregados) / 100;
let porcAsistencias = 4;
// document.write(porcTrabajos);
// 45



materias = {
    matematicas: {
        nombre:
            ["Matematicas"],
        trabEntregados:
            [5,8,9,10,6,3],
        asistencias:
            [true,true,true,true,true,true],
        evaluacion:
            [9.5]
    },
    español: {
        nombre:
            ["Español"],
        trabEntregados:
            [2,2,2,2,2,2],
        asistencias:
            [true,true,true,false,false,false],
        evaluacion:
            [9.5]
    },
    fisica: {
        nombre:
            ["Fisica"],
        trabEntregados:
            [4,4,4,4,4,4],
        asistencias:
            [true,true,true,true,false,false],
        evaluacion:
            [9.5]
    },
    programacion: {
        nombre:
            ["Programacion"],
        trabEntregados:
            [6,6,6,6,6,6],
        asistencias:
            [true,true,true,true,true,false],
        evaluacion:
            [9.5]
    },
    algebra: {
        nombre:
            ["Algebra"],
        trabEntregados:
            [8,8,8,8,8,8],
        asistencias:
            [false,false,false,false,false,false],
        evaluacion:
            [9.5]
    }, 
}

// console.log(materias);
document.write(materias + "<br>");                                      //Objeto
document.write(materias[0] + "<br>");                                   //undefined
document.write(materias["matematicas"] + "<br>");                       //Objeto
document.write(materias["matematicas"]["nombre"] + "<br>");             //nombre de la materia
document.write(materias["matematicas"]["trabEntregados"] + "<br>");     //trabEntregados
document.write(materias["matematicas"]["asistencias"] + "<br>");        //asistencias
document.write(materias["matematicas"]["evaluacion"] + "<br>");         //evaluacion

// console.log(materias[])

document.write("<br><br>");

for (const i in materias) {
    document.write(materias[i] + "<br>");
    //Esta corriendo el ciclo 5 veces que son las posiciones que cuenta el objeto o array materias que son 5 materias
}
document.write("<br><br>");

for (const i in materias["matematicas"]) {
    document.write(materias["matematicas"][i] + "<br>");
    //Esta corriendo el ciclo 4 veces que son las posiciones que cuenta el objeto o array materias["matematicas"] que son 5 materias
}

document.write("<br><br>");
for (const i in materias["matematicas"]["trabEntregados"]) {
    document.write(materias["matematicas"]["trabEntregados"][i] + "<br>");
    //Esta corriendo el ciclo 6 veces que son las posiciones que cuenta el objeto o array materias["matematicas"]["trabEntregados"] que son 6 notas
}


