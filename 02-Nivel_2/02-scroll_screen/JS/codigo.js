/*
    * scrollX   -   Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente
    * scrollY   -   Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente
    * scroll()  -   desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)
    * screen    -   Devuelve una referencia al objeto de pantalla asociada con la ventana 
    * screenLeft-   Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de 
                    la pantalla
    * screenTop -   Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la 
                    pantalla

    soslo funciona desde un servidor
    * resizeBy()-   Cambia el tamaño de la ventana actual en una cantidad especifica
    * resizeTo()-   redimensiona dinamicamente la ventana
    * moveBy()  -   Mueve la ventana en una ubicacion relativa
    * moveTo()  -   Mueve la ventana en una ubicacion absoluta
 
    para devolver true o false y saber si esta o no visible
    * objetos barprop
        - locationbar
        - menubar
        - personalbar
        - scrollbars
        - statusbar
        - toolbar
*/

/*
////////////////////////////////////////////// window.screen //////////////////////////////////////////////
    Devuelve una referencia al objeto de pantalla asociada con la ventana
    Es un objeto donde se visualiza distintas propiedades de la ventana del navegador que se visualizan a traves de consola, se puede acceder a cada una de sus propiedades individuales llamandolas seguidas por .
*/
let ejemplo1 = window.screen;
console.log("Ejemplo 1 con window.screen : ", ejemplo1);
document.write(ejemplo1);
document.write(ejemplo1.availHeight + "<br>");

/*
////////////////////////////////////////////// window.screenLeft //////////////////////////////////////////////
    Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla
*/
let ejemplo2 = window.screenLeft;
console.log("Ejemplo 2 con window.screenLeft : ", ejemplo2);
document.write(ejemplo2 + "<br>");

/*
////////////////////////////////////////////// window.screenTop //////////////////////////////////////////////
    Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla
*/
let ejemplo3 = window.screenTop;
console.log("Ejemplo 3 con window.screenTop : ", ejemplo3);
document.write(ejemplo3 + "<br>");

/*
////////////////////////////////////////////// window.scrollX //////////////////////////////////////////////
    Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente teniendo en cuenta si ha usado o no el scroll y esta misma donde se encuentre posicionado
*/
let ejemplo4 = window.scrollX;
console.log("Ejemplo 4 con window.scrollX : ", ejemplo4);
document.write(ejemplo4 + "<br>");

/*
////////////////////////////////////////////// window.scrollY //////////////////////////////////////////////
    Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente teniendo en cuenta si ha usado o no el scroll y esta misma donde se encuentre posicionado
*/
let ejemplo5 = window.scrollY;
console.log("Ejemplo 5 con window.scrollY : ", ejemplo5);
document.write(ejemplo5 + "<br>");

/*
////////////////////////////////////////////// window.scroll() //////////////////////////////////////////////
    desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)
*/
let ejemplo6 = window.scroll(0, 200);
console.log("Ejemplo 6 con window.scroll : ", ejemplo6);
document.write(ejemplo6 + "<br>");
