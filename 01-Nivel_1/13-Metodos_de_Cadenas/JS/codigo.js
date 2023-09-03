/*
    Metodos de Cadenas

    -concat()       
        junta dos o mas cadenas y retorna una nueva
    -startsWith()   
        si es una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false
    -endsWith()   
        si es una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false
    -includes()
        Si una cadena puede encontrarse dentro de otra cadena devuelve true sino devuelve false.
    -indexOf()
        devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
    -lastIndexOf()
        devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1


    -padStart() [Propuesta de Estandar]
        Rellenar cadena al principio con los caracteres deseados.
    -padEnd() [Propuesta de ECMA]
        Rellenar cadena al final con los caracteres deseados
    -repeat()
        Devuelve la misma cadena pero repetida la cantidad
        es cierto que eres una persona igual que el resto del mundo
        pero para mi, eres todo mi mundo


    -split()
        Divide la cadena como la pidamos
    -substring()
        Nos retorna un pedazo de la cena que seleccionamos
    -toLowerCase()
        Convierte una cadena a minusculas
    -toUpperCase()
        Convierte una cadena a mayusculas
    -toString()
        Metodo que devuelve una cadena que representa al objeto especificado
    -trim()
        elimina los espacios en blanco al principio y al final de una cadena.
    -trimEnd()
        elimina los espacios en blanco al final de una cadena.
    -trimStart()
        elimina los espacios en blanco al comienzo de una cadena.
    -valueOf()
        Retorna el valor primitivo de un objeto String
*/

document.write("<h3> Ejemplo numero 1 concat() </h3>");
let ejemplo1 = "yo no se por que amo a maria fernanda";
let ejem1 = "Pero Bueno que le puedo hacer";
resultado1 = ejemplo1.concat(" " + ejem1);
document.write(ejemplo1 + "<br>");
document.write(ejem1 + "<br>");
document.write(resultado1);
/*
    -concat()       
        junta dos o mas cadenas y retorna una nueva
        Devuelve una cadena combinada
*/


document.write("<h3> Ejemplo numero 2 startswith() </h3>");
let ejemplo2 = "maria yo no se por que amo a maria fernanda";
let ejem2 = "maria";
resultado2 = ejemplo2.startsWith(ejem2);
document.write(ejemplo2 + "<br>");
document.write(ejem2 + "<br>");
document.write(resultado2);
/*
    -startsWith()   
        sirve para comparar dos cadenas, si ambas cadenas empiezan igual devuelve true , sino devuelve false
        si se compara se debe tener en cuenta que sea un valor exacto para dar true
        tambien ademas de variables se puede comparar con un texto en comillas
        resultado2 = ejemplo2.startsWith("maria");
*/


document.write("<h3> Ejemplo numero 3 endsWith() </h3>");
let ejemplo3 = "maria yo no se por que amo a maria fernanda";
let ejem3 = "fernanda";
resultado3 = ejemplo3.endsWith(ejem3);
document.write(ejemplo3 + "<br>");
document.write(ejem3 + "<br>");
document.write(resultado3);
/*
    -endsWith()
        sirve para comparar dos cadenas, si ambas cadenas finalizan igual devuelve true , sino devuelve false
        si se compara se debe tener en cuenta que sea un valor exacto para dar true
        tambien ademas de variables se puede comparar con un texto en comillas
        resultado3 = ejemplo3.endsWith("fernanda");
*/


document.write("<h3> Ejemplo numero 4 includes() </h3>");
let ejemplo4 = "yo no se por que amo a maria fernanda";
let ejem4 = "por que";
resultado4 = ejemplo4.includes(ejem4);
document.write(ejemplo4 + "<br>");
document.write(ejem4 + "<br>");
document.write(resultado4);
/*
    -includes()
        sirve para comparar dos cadenas, si la cadena que se compara esta en algun segmento de la otra cadena devuelve true , sino devuelve false
        si se compara se debe tener en cuenta que sea un valor exacto para dar true
        tambien ademas de variables se puede comparar con un texto en comillas 
        resultado4 = ejemplo4.includes("por que");
*/


document.write("<h3> Ejemplo numero 5 indexOf() </h3>");
let ejemplo5 = "yo no se por que amo a maria fernanda";
let ejem5 = "por que";
resultado4 = ejemplo5.indexOf(ejem5);
document.write(ejemplo5 + "<br>");
document.write(ejem5 + "<br>");
document.write(resultado4);
/*
    -indexOf()
        devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
        resultado4 = ejemplo5.includes("por que");
*/


document.write("<h3> Ejemplo numero 6 lastIndexOf() </h3>");
let ejemplo6 = "yo no se por que amo a maria fernanda por que pienso tanto en ella por que es mi bebe";
let ejem6 = "por que";
resultado4 = ejemplo6.lastIndexOf(ejem6);
document.write(ejemplo6 + "<br>");
document.write(ejem6 + "<br>");
document.write(resultado4);
/*
    -lastIndexOf()
        devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1
        resultado4 = ejemplo6.includes("por que");
        En este caso a pesar de que la cadena "por que" se repite en muchas ocaciones tomara el inicio de la cadena pero de la ultima palabra "por que" encontrada en la cadena
*/


document.write("<h3> Ejemplo numero 7 padStart() </h3>");
let ejemplo7 = " maria fernanda";
let ejem7 = "ti amu "
resultado7 = ejemplo7.padStart(60,ejem7);
document.write(ejemplo7 + "<br>");
document.write(resultado7);
/*
    -padStart() [Propuesta de Estandar]   padStart(cantidad de caracteres que se desea tener la cadena de texto,palabra o variable para agregar)
        Rellenar cadena al principio con los caracteres deseados. si la cadena cuenta con 20 caracteres y se indican 40 en el parametro, se rellenara con la palabra o la variable indicada en el parametro
*/


document.write("<h3> Ejemplo numero 8 padStart() </h3>");
let ejemplo8 = "maria fernanda ";
resultado8 = ejemplo8.padEnd(60,"ti amu ");
document.write(ejemplo8 + "<br>");
document.write(resultado8);
/*
    -padEnd() [Propuesta de ECMA] padEnd(cantidad de caracteres que se desea tener la cadena de texto,palabra o variable para agregar)
        Rellenar cadena al final con los caracteres deseados. si la cadena cuenta con 20 caracteres y se indican 40 en el parametro, se rellenara con la palabra o la variable indicada en el parametro
*/


document.write("<h3> Ejemplo numero 9 padStart() </h3>");
let ejemplo9 = "yo no se por que amo a maria fernanda <br>";
resultado9 = ejemplo9.repeat(3);
document.write(ejemplo9);
document.write(resultado9);
/*
    -repeat()
        Devuelve la misma cadena pero repetida la cantidad
        si colocamos 0 no mostrara nada
*/


document.write("<h3> Ejemplo numero 10 Split() </h3>");
let ejemplo10 = "yo,no,se,por,que,amo,a,maria,fernanda";
resultado10 = ejemplo10.split(",");
document.write(ejemplo10 + "<br>");
document.write(resultado10[5]);
/*
    -split()
        Divide la cadena como la pidamos en arrays
        En este caso estamos convirtiendo las "," en separadores de arrays convirtuiendo cada palabra en un conjunto de arrays
        si no se establece comas en el split el automaticamente las separa por, tambien funciona con espacios pero los resmplazara por ,
*/


document.write("<h3> Ejemplo numero 11 substring() </h3>");
let ejemplo11 = "yo no se por que amo a maria fernanda";
resultado11 = ejemplo11.substring(17,28);
document.write(ejemplo11 + "<br>");
document.write(resultado11);
/*
    -substring()    =   substring(posicion inicial, posicion final)   
        Nos retorna un pedazo de la que seleccionamos
*/


document.write("<h3> Ejemplo numero 12 toLowerCase() </h3>");
let ejemplo12 = "YO NO SE POR QUE AMO A MI ESPOSITA";
resultado12 = ejemplo12.toLowerCase();
document.write(ejemplo12 + "<br>");
document.write(resultado12);
/*
    -toLowerCase()
        Convierte una cadena a minusculas
*/


document.write("<h3> Ejemplo numero 13 toUpperCase() </h3>");
let ejemplo13 = "yo no se por que amo a mi esposita";
resultado13 = ejemplo13.toUpperCase();
document.write(ejemplo13 + "<br>");
document.write(resultado13);
/*
    -toUpperCase()
        Convierte una cadena a mayusculas
*/


document.write("<h3> Ejemplo numero 14 toString() </h3>");
let ejemplo14 = 50;
resultado14 = ejemplo14.toString();
document.write(ejemplo14 + "<br>");
document.write(resultado14 + 999);
/*
    -toString()
        Metodo que devuelve una cadena que representa al objeto especificado
        Convierte El numero en una cadena de texto por lo cual no suma pero si multiplica, divide y resta
*/


document.write("<h3> Ejemplo numero 15 trim() </h3>");
let ejemplo15 = "  yo no se por que amo a mi esposita  ";
document.write(ejemplo15 + " ");
document.write(ejemplo15.length + "<br>");
resultado15 = ejemplo15.trim();
document.write(resultado15 + " ");
document.write(resultado15.length + "<br>");
/*
    -trim()
        elimina los espacios en blanco al principio y al final de una cadena. explicado con .length
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.write("<h3> TIPS 1  Ubicar un caracter dentro de una cadena string </h3>");
let tips1 = "yo no se por que amo a maria fernanda";
document.write(tips1[17],tips1[18],tips1[19],tips1[20],tips1[21],tips1[22],tips1[23],tips1[24],tips1[25],tips1[26],tips1[27]);
/*
    otro ejemplo para ubicar un caracter en una cadena de texto debido a que los string hacer parte de objetos    
*/


document.write("<h3> TIPS 2 para contar los caracteres que tenga una cadena </h3>");
let tips2 = "yo no se por que amo a maria fernanda";
document.write(tips2 + "<br>");
document.write(tips2.length);
/*
    .length es una propiedad que sirve para contar los caracteres que tenga una cadena
*/


document.write("<br>");
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
    

// es cierto que eres una persona igual que el resto del mundo
// pero para mi, eres todo mi mundo