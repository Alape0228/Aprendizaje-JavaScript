/*
    Problema
        * terminando el primer semestre de la universidad
        * las tareas son mucho mas avanzadas
        * ademas de + - * / (calcular potencia, raices cuadradas y cubicas)
        * la facultad esta por empezar nuevamente y las 12 materias ya tienen asignado un profesor
        * Todos los alumnos escritos a dichas clases    
    
    * perfeccionar calcular para implementar nuevas funciones
    * Crear funcion que al pasarle por parametro la materia devuelva el profesor asignado ademas del nombre de los alumnos
    * Funcion que indique en cuantas clases esta cofla
    * Nombrar las clases en las que esta cofla y los profesores de dichas clases
    * Pregutar a que materia se quiere inscribir 
    * si ya hay 20 inscriptos negarle la inscripsion
    * si hay menos de 20 inscribirlo y añadirlo a la lista de alumnos

*/


funcionMateria = (materia)=>{
    asignaturas = {
        matematicas : [
            ["Lorena","Paola","Rocio","Rosa","David","cofla"],["Cesar"]],
        español : [
            ["Belkis","Mafe","Sebastian","Matias","Sara","David","Pedro"],["Constanza"]],
        geometria : [
            ["Fernando","Camilo","Pedro","Simon","Jesus","Lorena","Sara"],["Alape"]],
        estadistica : [
            ["Estefa","Carlos","Sonia","Ramiro","Franco"],["Delgado"]],
        programacion : [
            ["Lorena","Rocio","David","Belkis","Sebastian"],["Ospina"]],
        ciencias : [
            ["Paola","Lorena","Rosa","Jose","David","Mafe","Matias"],["Guzman"]],
        fisica : [
            ["Sara","Camilo","Simon","Estefania","Sonia","cofla"],["Flores"]]
    }

    if (asignaturas[materia] !== undefined) {
        document.write(`
        Informacion de la materia : ${materia} <br> 
        El profesor Asignado es : ${asignaturas[materia][1]} <br>
        Cuenta con los siguientes alumnos : ${asignaturas[materia][0]}<br><br>`);
    }else{
        document.write("No se encuentra la materia indicada<br><br>");
    }


}
let materia = prompt("Que materia desea consultar");
funcionMateria(materia);

/*
    * esta ves se maneja corchetes {} pero se esta trabajando con funciones y arrays
    * se crea la funcion funcionMateria("parametros") y se pasan por parametros la materia que se desea consultar
    * se realiza la prueba "document.write(asignaturas[materia])" dentro de la funcion y nos damos cuenta que nos retorna el contenido de la materia al digitar bien el nombre de la materia en el parametro
    * al digitar mal el nombre de la materia la funcion no nos retorna el contenido, nos retorna "undefined"
    * aprovechamos esta oportunidad para que cuando el usuario (NO DIGITE MAL) se muestre el contenido  de la materia y en caso contrario indicar que se digito mal
     
    
    Array       = asignaturas["ciencias"]
    Alumnos     = asignaturas["ciencias"][0]
    profesor    = asignaturas["ciencias"][1]
*/

consultaMateria =(alumno)=>{
    for (const i in asignaturas) {
        if (asignaturas[i][0].includes(alumno)) {
            document.write(`
            Te Encuentras registrado en la materia : ${i} <br>
            Y te asignaron el siguiente profesor : ${asignaturas[i][1]} <br><br>
            `);
        }
        else{
            document.write("No reconocemos ese estudiante")
            break
        }
    }
}
/*  
    document.write(i)                   =   Muestra Todas las materias
    document.write(asignaturas[i])      =   Muestra Todo el array
    document.write(asignaturas[i][0])   =   Muestra Todos los Alumnos
    document.write(asignaturas[i][1])   =   Muestra Todos los Profesores

    *Recordar que i recorre todos los elementos del array
    *Recordar que el array u objeto que recorre el for es asignaturas
    *funcionMateria es solo una funcion
    *como ya sabemos que en cada ciclo "asignaturas[i][0]" recorrera los alumnos implementamos la funcion .includes() para que busque al alumno en el array y si lo encuentra imprimir texto
*/

let alumno = prompt("Digita por favor el nombre para realizar busqueda e indicar en que materias te encuentras ");
consultaMateria(alumno)