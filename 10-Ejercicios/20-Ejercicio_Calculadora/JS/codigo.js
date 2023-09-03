let sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
let restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
let multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
let dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
let potencia = (num1,num2)=>{
    return parseInt(num1) ** parseInt(num2);
}
let rCuadrada = (num1)=>{
    return  Math.sqrt(num1);
}
let rCubica = (num1,num2)=>{
    return  Math.cbrt(num1);
}
let porcentaje = (nporcentaje,total)=>{
    return (parseInt(nporcentaje) * parseInt(total)) / 100 ;
}


alert("Que operacion Desea Realizar:");
let operacion = prompt("1= Suma  2= Resta  3= Multiplicacion  4= Division  5= Potenciacion  6= Raiz Cuadrada  7= Raiz Cubica  8= Porcentaje");

if (operacion == 1) {
    num1 = prompt("Primer Numero para Sumar");
    num2 = prompt("Segundo Numero para Sumar");
    resultado = sumar(num1,num2);
    alert(resultado);
} else if (operacion == 2){
    num1 = prompt("Primer Numero para Restar");
    num2 = prompt("Segundo Numero para Restar");
    resultado = restar(num1,num2);
    alert(resultado);
} else if (operacion == 3){
    num1 = prompt("Primer Numero para Multiplicar");
    num2 = prompt("Segundo Numero para Multiplicar");
    resultado = multiplicar(num1,num2);
    alert(resultado);
} else if (operacion == 4){
    num1 = prompt("Primer Numero para Dividir");
    num2 = prompt("Segundo Numero para Dividir");
    resultado = dividir(num1,num2);
    alert(resultado);
}else if (operacion == 5){
    num1 = prompt("Numero al que deseas sacar la potencia");
    num2 = prompt("Cual sera la potencia del numero anterior");
    resultado = potencia(num1,num2);
    alert(resultado);
}else if (operacion == 6){
    num1 = prompt("Numero al que deseas sacar la raiz cuadrada");
    resultado = rCuadrada(num1);
    alert(resultado);
}else if (operacion == 7){
    num1 = prompt("Numero al que deseas sacar la raiz Cubica");
    resultado = rCubica(num1);
    alert(resultado);
}else if (operacion == 8){
    nporcentaje = prompt("Indica por favor el porcentaje que deseas sacar");
    total = prompt("Indica por favor el total de las notas o de lo que deseas sacar ejm: si son 6 notas y su puntaje total de notas maxima es 60 ese es el total que debes digitar");
    resultado = porcentaje(nporcentaje,total);
    alert(resultado);
} else{
    alert("o no digitaste entre el 1-4 o simplemente no quisiste usar la calculadora");
}

