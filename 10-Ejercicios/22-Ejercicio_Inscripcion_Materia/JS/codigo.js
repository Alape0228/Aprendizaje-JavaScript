/*
    Problema
    * si ya hay 20 inscriptos negarle la inscripsion
    * si hay menos de 20 inscribirlo y añadirlo a la lista de alumnos

*/

asignaturas = {
    matematicas : [
        ["Lorena","Paola","Rocio","Rosa","David","cofla"],
        ["Cesar"]],
    español : [
        ["Belkis","Mafe","Sebastian","Matias","Sara","David","Pedro"],
        ["Constanza"]],
    geometria : [
        ["Fernando","Camilo","Pedro","Simon","Jesus","Lorena","Sara"],
        ["Alape"]],
    estadistica : [
        ["Estefa","Carlos","Sonia","Ramiro","Franco"],
        ["Delgado"]],
    programacion : [
        ["Lorena","Rocio","David","Belkis","Sebastian"],
        ["Ospina"]],
    ciencias : [
        ["Paola","Lorena","Rosa","Jose","David","Mafe","Matias"],
        ["Guzman"]],
    fisica : [
        ["Sara","Camilo","Simon","Estefania","Sonia","cofla"],
        ["Flores"]]
}
/*
    * El usar corchetes {} crea un tipo de objeto
    
    * Si se desea acceder a cada uno de los elementos del objeto se debe acceder como si fuese un array [] pero indicando anteriormente a que elemento desea acceder
    
    * asignaturas["matematicas"]
    * nombre del objeto, array, e indicamos el elemento a acceder, si se desea recorrer cada uno de los elementos usar un bucle
    
    Array : ${asignaturas["matematicas"]} <br>
    Alumnos : ${asignaturas["matematicas"][0]} <br>
    Profesor : ${asignaturas["matematicas"][1]} <br>
*/

alumno = prompt("Digite por favor su nombre");
materia = prompt("Digite por favor la materia a la cual decide inscribirse");

inscripcion = (alumno,materia)=>{
    cantAlumnos = asignaturas[materia][0].length;
    alumnosInscritos = asignaturas[materia][0]; 
    inscrito = alumnosInscritos.includes(alumno);
    // document.write(cantAlumnos);         : numero de cantidad de alumnos de la materia indicada
    // document.write(alumnosInscritos);    : Alumnos inscritos de la materia indicada
    // document.write(inscrito);            : revision de alumnos inscritos con el alumno indicado
    if (inscrito == false) {
        if (cantAlumnos <= 6 ) {
            document.write(`Alumnos Inscritos actualmente : ${alumnosInscritos} <br><br>`);
            alumnosInscritos.push(alumno);
            document.write(`Quedaste registrado exitosamente y ahora la lista de alumnos cambios ${alumnosInscritos}`);
        }else{
            document.write(`
            Lo siento Señor(a) ${alumno} no hay cupo disponible para inscribirte`);
        }
    }
    else {
        document.write(`
        Señor(a) ${alumno} Usted ya se encuentra registrado 
        en la materia ${materia} 
        Sea serio(a) por favor`)

    }
}

inscripcion(alumno,materia)

/*
    * Recordar que las funciones sirven enviando por parametros datos necesarios para su funcionamiento

    * Se captura por medio de promp el nombre y la materia en variables y estas variables son enviadas por parametros a la funcion inscripcion(alumno,materia)

    *Determinamos y almacenamos en variables la cantidad de alumnos, los alumnos y el calculo si esta o no inscrito en alguna materia

    *Recordar ejecutar la funcion enviando la informacion requerida por parametros
*/

