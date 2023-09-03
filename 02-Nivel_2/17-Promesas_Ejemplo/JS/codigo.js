
class persona {
    constructor (perfil,correo){
        this.PerfilUsuario = perfil;
        this.correoUsuario = correo;
    }
}
//Creacion de objeto y de lo que contendra ese objeto
let datos = [
    ["Jose David Alape Delgado","JoseDavid@gmail.com"],
    ["Maria Fernanda Flores","mafe@gmail.com"],
    ["Rosa Emilia Delgado","Rosa@gmail.com"],
    ["Jose Belkis Alape","Belkis@gmail.com"],
    ["Sara Salome Muñoz"],
]
//Creacion de array que contendran los datos necesarios para crear los objetos

let creacionUsuarios = [];
//Creacion de variable que contendra todos los objetos con los datos correspondientes

for (let i = 0; i < datos.length; i++) {
    creacionUsuarios[i] = new persona(datos[i][0],datos[i][1]);
}


////////////////////////////// Creacion de Funcion Para obtener el nombre del usuario //////////////////////////////
let obtenerUsuario = (id)=>{
    return new Promise((resolve, reject) => {
        if (creacionUsuarios[id] == undefined) {
            reject("Lo siento la posicion que nos indica no registra ningun usuario")
        }else{
            resolve(creacionUsuarios[id])
        }
    })
}
//Creacion de funcion que retorna lo que contenga promise que puede ser resolve y reject


////////////////////////////// Creacion de Funcion Para obtener el Correo del usuario //////////////////////////////
let obtenerCorreo = (id)=>{
    return new Promise((resolve, reject) => {
        if (creacionUsuarios[id].correoUsuario == undefined) {
            reject("Lo siento la posicion que nos indica no registra ningun Correo")
        }else{
            resolve(creacionUsuarios[id].correoUsuario)
        }
    })
}
//Creacion de funcion que retorna lo que contenga promise que puede ser resolve y reject


///////// Ejecucion de las funciones Anteriores que nos retorne lo positivo o negativo de dichas funciones /////////
obtenerUsuario(0).then((resultadoPromesa)=>{
    console.log(resultadoPromesa.PerfilUsuario);
}).catch((e)=>{
    console.log(e)
})

obtenerCorreo(0).then((resultadoPromesa)=>{
    console.log(resultadoPromesa);
}).catch((e)=>{
    console.log(e)
})
/* /////// Explicacion : ///////
    * Ejecutando la funcion anterior dando por parametros la posicion o id que se requiere para que funcione
    * usamos el metodo then() para que nos muestre el contenido de la promise que puede ser resolve o reject
    * Finalmente usamos el catch esto con el fin de que si retorna algun error nos muestre el reject
*/
/*/////// Consejos : ///////
    *   Aqui ejecutamos ambas funciones de manera individual pero tiene un problema
    *   Se debe hacer una validacion primero de que se halle el id o el array para luego solicitar el sistema que encuentre uno de sus sub modulos, 
    * ejem si no validamos que primero halle si hay una posicion 5 que no existe 
    * Al momento de buscar el correo no nos generara un error de no encontrada (undefined) si no que nos mostrara un error peor. 
    * por lo que se recomienda realizar la ejecucion primero de la funcion que ubique o encuentre la posicion y luego los submodulos como (nombre correo etc)
    * se debe ejecutar la funcion como lo haremos mas adelante abajo
*/


let obtenerPersona1 = (id)=>{
    obtenerUsuario(id).then((resultadoPromesa)=>{
        console.log(resultadoPromesa.PerfilUsuario);
        obtenerCorreo(id).then((resultadoPromesa)=>{
            console.log(resultadoPromesa);
        }).catch((e)=>{
            console.log(e)
        });
    }).catch((e)=>{
        console.log(e)
    });
}
obtenerPersona1(4)
/*
    * Se crea funcion para mostrar y ejecutar dos funciones mas pasando por parametro el id o posicion
    * esas dos funciones son obtenerUsuario y obtenerCorreo que para su funcionamiento se requiere de un id o posicion
    * Posicion o id que le enviamos por parametro
    * Recordar que el metodo then() nos devuelve un resolve o un reject
    * Si nos devuelve un resolve (positivo) ejecutara lo que contiene el resolve (que es enviarnos el usuario de la persona) y ejecutaria la siguiente funcion
    * que si nos devuelve un resolve (positivo) ejecutara lo que contiene el resolve (que es enviarnos el correo de la persona)
    * Su nos devuelve un reject (negavito) se va directamente al catch devolviendonos el mensaje de error dependiendo de la funcion que tipo de error
*/  


/////////////////////////// MISMO CODGIO PERO MAS SIMPLIFICADO HACIENDO USO DEL RETURN ///////////////////////////
let obtenerPersona2 = (id)=>{
    obtenerUsuario(id).then((resultadoPromesa)=>{
        console.log(resultadoPromesa.PerfilUsuario);
        return obtenerCorreo(id);
    }).then((resultadoPromesa)=>{
        console.log(resultadoPromesa);
    }).catch((e)=>{
        console.log(e)
    });
}
obtenerPersona2(4)
/*
    * Lo fascinante de este metodo es que no solo devuelve el valor del perfilUsuario
    * la funcion obtenerPersona2() nos retorna una promesa, la promesa de obtenerCorreo(id) con su parametro pasado
    * y el methodo then() recordar que se usa en promesas
    * para que de esta manera usemos el metodo then() sin llamar antes la funcion por el "."
    * como si se concatenera la funcion con otro metodo then() y el metodo se ejecutaria con respecto a obtenerCorreo(id) 
    * al ejecutarse el metodo then() de obtenerCorreo(id) dando como valor o resultado lo del correo
    * y de esta manera solo se necesaria un solo catch que es puesto al final de todos los metodos then(), que acumula todos o el error expuesto
    * 
Con este codigo nos mostrara todos los errores en un solo cathm,mn
*/  
