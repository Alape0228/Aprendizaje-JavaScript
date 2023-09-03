/*
Location
    window.location.href
        Devuelve el href (URL) de la pagina actual
    
    window.location.hostname
        Devuelve el nombre de dominio del servidor web
    
    window.location.pathname
        Devuelve la ruta y el nombre de archivo de la pagina actual
    
    window.location.protocol
        devuelve el protocolo web utilizado (http: o https:)
    
    window.location.assign
        Carga un nuevo documento
*/

/*
//////////////////////////////////////////////// window.location.href; ////////////////////////////////////////////////
    Devuelve el href (URL) de la pagina actual
*/
let ejemplo1 = window.location.href;
console.log("Ejemplo 1 window.location.href; ", ejemplo1);
document.write(ejemplo1 + "<br>");

/*
//////////////////////////////////////////////// window.location.hostname; ////////////////////////////////////////////////
    Devuelve el nombre de dominio del servidor web
    hostname es igual al dominio ejem (youtube.com, facebook.com con el htttp incluido)
*/
let ejemplo2 = window.location.hostname;
console.log("Ejemplo 2 window.location.hostname; ", ejemplo2);
document.write(ejemplo2 + "<br>");

/*
//////////////////////////////////////////////// window.location.pathname; ////////////////////////////////////////////////
    Devuelve la ruta y el nombre de archivo de la pagina actual
    pathnamme nos devuelve lo que va despues del dominio
*/
let ejemplo3 = window.location.pathname;
console.log("Ejemplo 3 window.location.pathname; ", ejemplo3);
document.write(ejemplo3 + "<br>");

/*
//////////////////////////////////////////////// window.location.protocol; ////////////////////////////////////////////////
    Devuelve el protocolo web utilizado (http: o https:)
*/
let ejemplo4 = window.location.protocol;
console.log("Ejemplo 4 window.location.protocol; ", ejemplo4);
document.write(ejemplo4 + "<br>");

/*
//////////////////////////////////////////////// window.location.assign(); ////////////////////////////////////////////////
    Carga un nuevo documento
*/
// let ejemplo5 = window.location.assign("https://www.youtube.com/");
// console.log("Ejemplo 5 window.location.assign; ", ejemplo5);
// document.write(ejemplo5 + "<br>");

// wwww = es un subdominio

// Http://youtube.com/channel/09asdas546

// Protocolo    = Http
// Hostname     = youtube.com   parecido a un dominio
// pathname     = channel/09asdas546
// Href         = Http://youtube.com/channel/09asdas546 es todo junto
