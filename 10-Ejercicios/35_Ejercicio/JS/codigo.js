/*
////////////////////////////////////// PROBLEMA PLANTEADO //////////////////////////////////////
David se quedo encerrado en la casa por que se le olvido la llave pero necesita salir urgente
llama a un cerrajero y pedirle que traiga la llave indicada pero no tiene tiempo para que el cerrajero investigue o indague sobre la llave necesaria a elegir de todas las 20 llaves del cerrajero es necesario indicarle que llave es la indicada o necesaria

////////////////////////////////////// Instrucciones a realizar //////////////////////////////////////
indicarle las 20 llaves posibles con sus imagenes y cofla debe seleccionar cual llave y seleccionarla


*/

let contenedor = document.querySelector(".contenedor");

function crearLLave(nombre, modelo, precio) {
  let img = `<img src="https://assets.stickpng.com/images/580b585b2edbce24c47b2851.png">`;
  let nombreLLave = `<h2>${nombre}</h2>`;
  let modeloLLave = `<h3>${modelo}</h3>`;
  let precioLLave = `<p>${precio}</p>`;
  return [img + nombreLLave + modeloLLave + precioLLave];
  // return [img + nombreLLave,modeloLLave,precioLLave] tambien sirve pero imprimiria con las ","
  //return img,nombre,modelo,precio;  Error
}

let fragmento = document.createDocumentFragment();
// El contenedor de fragmentos almacenara divs

for (let i = 1; i < 21; i++) {
  modeloAleatorio = Math.round(Math.random() * (9999999 - 1111111)) + 1111111; //Numero aleatorio de 11111-99999
  precioAleatorio = Math.round(Math.random() * (9 - 1)) + 1; //Numero aleatorio de 1-9
  let llave = crearLLave(
    `llave : ${i}`,
    `Modelo : ${modeloAleatorio}`,
    `Precio :$${precioAleatorio}.000`
  );

  let contenedorllave = document.createElement("DIV");
  contenedorllave.innerHTML = llave;

  // agregar el atributo tabindex para seleccionar a traves del tab sin necesidad de setAttribute()
  contenedorllave.tabIndex = i;

  // agregar dos clases a los div hijos que tienen como nombre "contenedorllave"
  contenedorllave.classList.add(`caja${i}`, `caja`);

  fragmento.appendChild(contenedorllave);
}
contenedor.appendChild(fragmento);

/*
    Pasos o instrucciones
    1- Como se debe crear 20 llaves se cre una funcion para la creacion de llave individual,
    2- se debe crear un ciclo que recorra 20 veces para la creacion de 20 llaves
    3- En realidad en el codigo no se crearon o se generaron 20 llaves (por que no se puede acceder a la llave 1 2 o 15) se genero una variable llamada llave que almaceno una llave y luego se sobreescribio 19 veces mas solo que antes de sobreescribirse se esta imprimiendo
    
    
    /////////////////////////////////// Instrucciones Ciclo ///////////////////////////////////
    
    1- se debe crear un modelo individual y un precio individual para cada llave
    2- por lo que se usa la funcion "Math.random()" 
        para que nos retorne y nos almacene un numetro aleatorio para el precio y el modelo
    3-  Se crea variable "llave" que almacena los datos de la llave aplicando la funcion crearLLave()
    4- para la funcion crearLLave() se pasan por parametros el numero aleatorio del precio, modelo y el indice 
    5- Al crear una variable que almacene una funcion es como si crearamos algun tipo de arreglo u objeto que se puede acceder a cada uno de sus parametros como si fuese un array pero que solo tendra como almacenado despues de la ejecucion la llave numero 20 que fue lo ultimo que se sobreescribio
    6- Recordar que Math.round redondea los numeros

    /////////////////////////////////// Instrucciones Funcion ///////////////////////////////////

    1- Se crea la funcion crearLLave y se pasan por parametros los datos importantes en lo que se diferencian las llaves (nombre,modelo,precio) para la img va ser la misma para todos
    2- se crean unas variables que despues seran retornadas en un arreglo array[] ya que si no se retorna en arreglo o array nos retornara solo la ultima variable declarada que es el precio
    3- En las variables almacenadas dejamos declaradas las etiquetas html que se usaran en la creacion
    4- Recordar que al ejecutar o llamar la funcion nos retornara la creacion de una llave con sus datos pasados por parametros y la imagen predeterminada para todos en forma de arreglo (sin embargo no es un array y no es un arreglo por que no se puede acceder a ninguna llave)

*/

/*
/////////////////////////////////// Consejos ///////////////////////////////////
  tabindex: //  titulo4.setAttribute("tabindex","1"); 
    * variable que almacena el elemento luego .setAttribute para agregar el atributo "tabindex" Cuyo segundo 
      paramentro es el numero que se desea colocar en la pocision
    * Recordar que es un Atributo que se le puede colocar a los elementos cuya funcion permite seleccionar por 
      medio de la tecla tabular
    * Sirve para enfocar el elemento con el tabulador en la pagina web

*/

/*
/////////////////////////////////// Consejos ///////////////////////////////////
  .addEventListener("")

*/
