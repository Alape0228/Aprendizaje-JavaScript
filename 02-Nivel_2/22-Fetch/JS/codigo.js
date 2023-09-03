/*
    FETCH
        Basado en promesas
            Siempre nos devuelve una promesa encapsulada
            Tener en cuenta que fetch funciona siempre como get
        Objeto Fetch
        text()
        json()
        blob()
        formData()      = Buscar
        arrayBuffer()   = Buscar
*/

let peticion1 = fetch("https://reqres.in/api/users?page=2");
let peticion2 = fetch("https://reqres.in/api/users?page=2");

console.log(peticion1);
console.log(peticion2);


// Como las promesas son asincronas en el momento en que cargue o cuente con resultado nos devolvera una respuesta


///////////////////////////////////// Metodo 1  Para acceder a la informacion /////////////////////////////////////
peticion1
    .then(res => res.json())
    .then(e => console.log(e))
/*
    1-  peticion Nombre de la variable que almacena la promesa
    2-  .then() metodo que se usa para acceder al contenido de una promesa
    3-  ()  Dentro de los parentesis va una funcion y parametros 
    4-  Para este ocacion se requiere usar dos veces el metodo .then()
    5-  uno se usara para que capture y devuelva lo que contiene el metodo .text() que hace parte del fecth
    6-  y el otro se encargara de mostrar lo que capturo y devolvio el metodo anterior
    7-  Con uno de los metodos que tiene fecth en este caso el .text()
    8-  Recordar que la primera funcion flecha tiene como parametro res
    9-  Recordar que la segunda funcion flecha tiene como parametro e
*/


///////////////////////////////////// Metodo 2  Para acceder a la informacion /////////////////////////////////////
peticion2.then((e)=>{
    res = e.text();
    return res
}).then((e)=>{
    console.log(e)
})
/*
    1-  peticion Nombre de la variable que almacena la promesa
    2-  .then() metodo que se usa para acceder al contenido de una promesa
    3-  ()  Dentro de los parentesis va una funcion y parametros 
    4-  El primer parametro es e 
    5-  Segundo parametro es la funcion flecha =>
    7   Con uno de los metodos que tiene fecth en este caso el .text()
    6-  y lo que quiere hacer la funcion es almacenar en la variable res el contenido que devuelve el metodo text()
    7-  ahora la variable text tiene almacenado una respuesta desencapsulada que para mostrarla es necesario usar nevamente el metodo then() ya que sigue siendo parte de una promesa
    8-  usamos el return para que esta funcion nos devuelva la variable then()
    9-  usamos nuevamente el metodo then() seguido de la peticion que es una promesa como si usaramos dos veces el metodo then() pero para este caso vamos a mostrar lo que contiene
*/

/////////////////////////////////// Metodo POST 1 Para acceder a la informacion ///////////////////////////////////
let peticion3 = fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify({
        "nombre" : "David",
        "apellido" : "Alape"
    }),
    headers : {
        "Content-type" : "application/json"
    }
});

peticion3
    .then(res => res.json())
    .then(e => console.log(e));

/*
    01- la Sintaxis solicita que al final del metodo fetch vaya un objeto con sus propiedades "{}"
    02- propiedades : method, body y headers, recordar que como es un objeto json van en comillas las propiedades
    03- para la propiedad method "POST" En este caso y en mayuscula
    04- para la propiedad body es el contenido o lo que le querramos pasar al servidor
    05- Recordar que para enviar datos al servidor tipo Json deben ser enviados modo string es por eso el uso de stringify({}) y dentro del los corchetes obvio el objeto json convertido 
    06- para la propiedad headers requiere enviar o crear otro objeto "{}" con la propiedad y resultado o contenido
    07- "Content-type" : "application/json"
    08- El trae "createdAt" que es la fecha de creacion
    09- Tener en cuenta que hay muchos tipos de headers dependiendo de la informacion que se envia al servidor
*/

/////////////////////////// Metodo POST 2 Para acceder a la informacion con menos codigo ///////////////////////////
let peticion4 = fetch("https://reqres.in/api/users",{
    method : "POST",
    body : `{"nombre" : "Jose","apellido" : "Delgado"}`,
    headers : {"Content-type" : "application/json"}
});

peticion4
    .then(res => res.json())
    .then(e => console.log(e));

/*
    01- para este caso se usaron los batics `` para enviar al servidor un body tipo string
    02- Todo fue organizado de manera horizontal
*/