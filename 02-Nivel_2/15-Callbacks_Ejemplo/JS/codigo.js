class persona {
    constructor (perfil,correo){
        this.PerfilUsuario = perfil;
        this.correoUsuario = correo;
    }
}
// Recordar que en this es como aparece en la consola es como el titulo
// y el constructor simplemente es como una funcion que lleva por parametros lo que quieras pasarle

let ejemplo1 = new persona("Jose David Alape Delgado","JoseDavid@gmail.com");

console.log(ejemplo1);

let datos = [
    ["Jose David Alape Delgado","JoseDavid@gmail.com"],
    ["Maria Fernanda Flores","mafe@gmail.com"],
    ["Rosa Emilia Delgado","Rosa@gmail.com"],
    ["Jose Belkis Alape","Belkis@gmail.com"],
    ["Sara Salome Muñoz"],
]

// console.log(datos.length)
// Recordar que length sirve para contar los caracteres de un string pero no es su unica funcionalidad ya que si lo colocamos en arreglos indentificaremos tambien la cantidad de sun arreglos que cuenta 
// con respecto a lo anterior si podemos datos.length nos devolvera 5 que son la cantidad de arreglos que cuenta el arreglo general

let creacionUsuarios = [];

for (let i = 0; i < datos.length; i++) {
    // console.log(datos[i][0] + "//" + datos[i][1])
    creacionUsuarios[i] = new persona(datos[i][0],datos[i][1]);
}
console.log(creacionUsuarios);
console.log(creacionUsuarios[0].PerfilUsuario);
// Para esta ocacion para acceder al nombre o al correo se debe indicar el nombre puesto por this

// Este ciclo for tambien recorre arreglos, esto se debe al .length
// eso quiere decir que el ciclo se ejecutara 5 veces ya que son 5 arreglos los que contiene el arreglo datos
// Se inicializa la variable creacionUsuarios a la cual le indicamos que contendra un arreglo
// dentro del ciclo indicamos que el arreglo creacionUsuarios en la posicion i (0) almacenara el objeto cuyo primer parametro tendra lo contiene el arreglo datos  
// Como resultado la variable creacionUsuarios[] contendra 5 objetos 

console.log("//////////////// Ejemplo 1  ////////////////")

function capturar(capturarPosicion, funcmostrar) { 
    funcmostrar(capturarPosicion);
}

function mostrar(posicionArray) {
    console.log(creacionUsuarios[posicionArray].PerfilUsuario);
}
capturar(1,mostrar);

// function capturar()
// una funcion con dos parametros 
// 1 parametro = capturara la posicion que querramos pasarle (1-2-3-4)
// 2 parametro = capturara lo que equivale o lo que contiene el parametro 1 que a su ves funcionara como una funcion
// eso quiere decir que si el 1 parametro se le paseo el valor de 2 el segundo parametro su valor equivale a 2 y que a su ves funcionara como funcion
// Recordar que es IMPORTANTE!!! que la informacion que pasemos por parametros de una funcion a otra se debe hacer entre parantesis () sin =

// function mostrar()
// para este caso mostraremos parte del array que ya tenemos para para que esto funcione se requiere o se necesita la posicion, para mostrar una parte del array
// para esto necesitamos pasar por parametro la posicion del array que necesitamos
// como en la anterior funcion le pasamos por parametros entre parentesis funcmostrar(capturarPosicion); eso quiere decir que el segundo parametro equivale a 2 eso quiere decir que funcmostrar equivale exatamente lo mismo que posicionArray

// al ejecutar la funcion simplemente pasamos la posicion que deseamos y luego la otra funcion

console.log("//////////////// Ejemplo 2 sencillo  ////////////////")

let capturar2 = (posicion2, funcMostrar2)=>{
    funcMostrar2(posicion2)
}

capturar2(2,(posicionArray2)=>{
    console.log(creacionUsuarios[posicionArray2].PerfilUsuario);
})

// Se realizan dos funciones aunque una dentro de la otra
// 1 funcion lleva como nombre capturar2 la segunda funcion no tiene nombre ya que es una funcion flecha
// al ejecutar la funcion 1 se pasa por parametro el valor 2 y se ejecuta la segunda funcion

console.log("//////////////// Ejemplo 3 con condicionales si encuentra o no al usuario en el array  ////////////////")

let capturar3 = (posicion3,funcMostrar3)=>{
    if (creacionUsuarios[posicion3] == undefined) {
        // console.log("No se encontro la posicion indicada");
        funcMostrar3("No se encontro la posicion indicada",null)
    }else{
        // console.log("Funciona");
        funcMostrar3(null,posicion3)
    }
}

capturar3(2,(error,posicionArray3)=>{
    if (error) {
        console.log(error);
    }else{
        console.log(creacionUsuarios[posicionArray3].PerfilUsuario);
    }
})

/*
    Funcionamiento del codigo:

    1 creacion de funcion
        * Se utiliza dos parametros 1 donde se captura la posicion y 2 donde se ejecutara una segunda funcion
        * como ya tenemos un arreglo llamado creacionUsuarios[] con 5 posiciones (0-4)
        * le indicamos al sistema si  creacionUsuarios[posicion3] esta definida o no
        * recordar que posicion3 es lo que establezcamos nosotros o digie el usuario ejem : 10,1,2,6,9
        * si el usuario o nosotros establecemos que sera 4 seria creacionUsuarios[posicion3] creacionUsuarios[4]
        * la condicion es si creacionUsuarios[4] esta indefinida que el segundo parametro almacene 2 parametros mas (1 - un mensaje de error y 2- null)
        * si la condicion creacionUsuarios[4] so esta definida queremos que el segundo parametro almacene 2 parametros mas (1- null 2- la posicion que haya elegido el usuario o nosotros en este ejempl 4)
        * 
    
    2 ejecucion de la funcion mas creacion de segunda funcion
        * enviamos como parametro la posicion, y realizamos la creacion de la segunda funcion con 2 parametros
        * el codigo ejecutara la primera funcion si el numero que enviamos como posicion no esta definido almacenara el error
        * y la segunda funcion es, si error detecta que tiene algo, lo mostrara
        * en dado caso de que error este null o no contenga nada que muestre parte del arreglo en la posicion ya indicada anteriormente 4
*/


/*
CONSEJOS:

    Validar el funcionamiento de cada funcion de manera individual a la hora de hacer los callback
    con el fin de darle el funcionamiento a toda la funcion global

*/

console.log("//////////////// Ejemplo 4 si parte de un array no se encuentra ////////////////")

let obtenerPersonaCorreo = (posicion4,funcMostrar4)=>{
    if (creacionUsuarios[posicion4] == undefined) {
        // console.log("No se encontro la posicion indicada");
        funcMostrar4("No se encontro la posicion indicada",null)
    }else{
        // console.log("Funciona");
        funcMostrar4(null,posicion4)
    }
}

let mensajeCorreo = (id,errorCorreo) =>{
    if (creacionUsuarios[id].correoUsuario == undefined) {
        errorCorreo("Lo Siento El Usuario No Cuenta Con Correo",null)
    }else{
        errorCorreo(null,creacionUsuarios[id].correoUsuario)
    }
}

obtenerPersonaCorreo(4,(error2,posicionArray4)=>{
    if (error2) {
        console.log(error2);
    }else{
        console.log(creacionUsuarios[posicionArray4].PerfilUsuario);
        mensajeCorreo(posicionArray4,(errorCorreo,posicionCorreo)=>{
            if (errorCorreo) {
                console.log(errorCorreo)
            }else{
                console.log(posicionCorreo);
            }
        });
    }
})


/*
LINEA 155
    * para el error del undefined se debe a que
    * tenemos la funcion flecha en un console.log
*/
//  