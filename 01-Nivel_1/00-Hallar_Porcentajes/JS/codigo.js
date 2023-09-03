
/*
    esto es para calcular el 75% de 50,000				se toma el total y se / en 100 y el resultado es multiplicado por el porcentaje que se quiera averiguar


*/


let form1Boton = document.querySelector(".form1-Boton");
let form1resultado = document.querySelector(".form1-resultado");

form1Boton.addEventListener("click",()=>{
    let form1NumeroInicial = document.querySelector(".form1-NumeroInicial").value
    let form1NumeroFinal = document.querySelector(".form1-NumeroFinal").value

    // res = Math.trunc((form1NumeroInicial * 100) / form1NumeroFinal);   
    res = (form1NumeroInicial * 100) / form1NumeroFinal;   

    form1resultado.textContent = res;
    
})


let form2Boton = document.querySelector(".form2-Boton");
let form2resultado = document.querySelector(".form2-resultado");

form2Boton.addEventListener("click",()=>{
    let form2NumeroInicial = document.querySelector(".form2-NumeroInicial").value
    let form2NumeroFinal = document.querySelector(".form2-NumeroFinal").value

    // res = Math.trunc((form1NumeroInicial * 100) / form1NumeroFinal);   
    res2 = (form2NumeroInicial / 100) * form2NumeroFinal;   

    form2resultado.textContent = res2;
    
})
