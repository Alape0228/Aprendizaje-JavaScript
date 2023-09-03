/*
LIBRERIA AXIOS
    Asi como fetch llego a remplazar a XMLHttpRequest
    la libreria axios viene a remplazar a fecth
    Se usa cuando queremos trabajar con un sitio web especial para enviar peticiones y recibirlas
    https://github.com/axios/axios

    * Pone automaticamente los headers
    * Para saber que metodo se esta trabajando en consola - > objeto -> config -> method : "get"
*/
  
axios("informacion.txt").then(e => console.log(e))

// Si queremos hacerlo tipo post
let peticion1 = axios.post("informacion.txt").then(res => console.log(res))



// Para enviar informacion a traves de post 
let peticion2 = 
    axios.post("https://reqres.in/api/users",{
        "nombre" : "David",
        "apellido" : "Alape"
    }).then(res => console.log(res))

/*
    Para este caso no es necesario enviar el methodo post como propiedad ni el header solo el body o contenido que no es necesario especificar que sea body como en fetch

    En consola se muestra organizado de manera alfabetica
*/