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

let porcentaje = 75;
let totalTrabajosEntregados = 60;
let porcTrabajos = (porcentaje * totalTrabajosEntregados) / 100;
let porcAsistencias = 4;
// document.write(porcTrabajos);
// 45

class asignaturas{
    constructor(tEntregados=[], asistencias=[], evaluacion){
        this.protEntregados = tEntregados;
        this.proasistencias = asistencias;
        this.proevaluacion = evaluacion;
    }
}

let matematicas = new asignaturas ([10,5,6,7,8,3],[true,false,true,true,true,true,],[8.5]);
let español = new asignaturas ([10,8,5,9,8,9],[true,true,true,true,true,true,],[5.5]);
let fisica = new asignaturas ([5,5,5,5,5,5],[false,true,false,true,false,true,],[9.5]);


let calculartentregados = (materia)=>{
    
    if (materia == "matematicas" || materia == "MATEMATICAS" || materia == "Matematicas") {
        let restentregados = 0 ;
        for (const i in matematicas.protEntregados) {
            matematicas.protEntregados[i];
            // document.write(matematicas.protEntregados[i] + "<br>");
            restentregados = restentregados + matematicas.protEntregados[i];
        }
        let resasistencias = 0 ;
        for (const i in matematicas.proasistencias) {
            matematicas.proasistencias[i];
            // document.write(matematicas.proasistencias[i] + "<br>");
            resasistencias = resasistencias + matematicas.proasistencias[i]; 
        }
        
        console.groupCollapsed("MATEMATICAS")
        console.log(`El promedio de tus notas de los trabajos entregados es : ${restentregados}`);
        if (restentregados < porcTrabajos) {
            console.error("lo siento perdiste el promedio de trabajos que debia ser mayor a : 45");
        }
        else if (restentregados >= porcTrabajos){
            console.info("%c Tuviste exito ya que el promedio para pasar debia ser mayor a : 45","background-color: #8be78e");
        }
        
        console.log(`El promedio de tus asistencias es : ${resasistencias}`);
        if (resasistencias < 4) {
            console.error("lo siento perdiste el promedio de asistencias que debia ser mayor a : 4");
        }
        else if (resasistencias >= 4){
            console.info("%c Tuviste exito ya que el promedio de asistencias debia ser mayor a : 4", "background-color: #8be78e");
        }
        console.log(`nota del parcial o evaluacion : ${matematicas.proevaluacion}`);
        // let resultado = [restentregados,resasistencias,matematicas.proevaluacion]
        // return resultado
    } 
    else if (materia == "español" || materia == "ESPAÑOL" || materia == "Español"){
        let restentregados = 0 ;
        for (const i in español.protEntregados) {
            español.protEntregados[i];
            // document.write(español.protEntregados[i] + "<br>");
            restentregados = restentregados + español.protEntregados[i];
        }
        let resasistencias = 0 ;
        for (const i in español.proasistencias) {
            español.proasistencias[i];
            // document.write(español.proasistencias[i] + "<br>");
            resasistencias = resasistencias + español.proasistencias[i]; 
        }
        
        console.groupCollapsed("español")
        console.log(`El promedio de tus notas de los trabajos entregados es : ${restentregados}`);
        if (restentregados < porcTrabajos) {
            console.error("lo siento perdiste el promedio de trabajos que debia ser mayor a : 45");
        }
        else if (restentregados >= porcTrabajos){
            console.info("%c Tuviste exito ya que el promedio para pasar debia ser mayor a : 45","background-color: #8be78e");
        }
        
        console.log(`El promedio de tus asistencias es : ${resasistencias}`);
        if (resasistencias < 4) {
            console.error("lo siento perdiste el promedio de asistencias que debia ser mayor a : 4");
        }
        else if (resasistencias >= 4){
            console.info("%c Tuviste exito ya que el promedio de asistencias debia ser mayor a : 4", "background-color: #8be78e");
        }
        console.log(`nota del parcial o evaluacion : ${español.proevaluacion}`);
        // let resultado = [restentregados,resasistencias,español.proevaluacion]
        // return resultado
    }
    else if (materia == "fisica" || materia == "FISICA" || materia == "Fisica"){
        let restentregados = 0 ;
        for (const i in fisica.protEntregados) {
            fisica.protEntregados[i];
            // document.write(fisica.protEntregados[i] + "<br>");
            restentregados = restentregados + fisica.protEntregados[i];
        }
        let resasistencias = 0 ;
        for (const i in fisica.proasistencias) {
            fisica.proasistencias[i];
            // document.write(fisica.proasistencias[i] + "<br>");
            resasistencias = resasistencias + fisica.proasistencias[i]; 
        }
        
        console.groupCollapsed("fisica")
        console.log(`El promedio de tus notas de los trabajos entregados es : ${restentregados}`);
        if (restentregados < porcTrabajos) {
            console.error("lo siento perdiste el promedio de trabajos que debia ser mayor a : 45");
        }
        else if (restentregados >= porcTrabajos){
            console.info("%c Tuviste exito ya que el promedio para pasar debia ser mayor a : 45","background-color: #8be78e");
        }
        
        console.log(`El promedio de tus asistencias es : ${resasistencias}`);
        if (resasistencias < 4) {
            console.error("lo siento perdiste el promedio de asistencias que debia ser mayor a : 4");
        }
        else if (resasistencias >= 4){
            console.info("%c Tuviste exito ya que el promedio de asistencias debia ser mayor a : 4", "background-color: #8be78e");
        }
        console.log(`nota del parcial o evaluacion : ${fisica.proevaluacion}`);
        // let resultado = [restentregados,resasistencias,fisica.proevaluacion]
        // return resultado
    }
    else{
        document.write("Digitaste mal")
    }
}

let materia = prompt("Digita por favor la materia que desea consultar")
resultado = calculartentregados(materia)



