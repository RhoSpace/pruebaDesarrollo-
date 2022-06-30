//obtencion de ul para hacer el listado y/o respuestas.
const pares1 = document.getElementById("pares1");
const pares2 = document.getElementById("pares2");
const impares1 = document.getElementById("impares1");
const impares2 = document.getElementById("impares2");
const fibonachiNumbers = document.getElementById("fibonachiNumbers");

//Obtengo los botones
const exercise1 = document.getElementById("activate1");
const exercise2 = document.getElementById("activate2");
const exercise3 = document.getElementById("activate3");
const exercise4 = document.getElementById("activate4");
const exercise5 = document.getElementById("activate5");


//funciones para cada ejercicio
const ejecicioPares1 = (number) => {
    pares1.innerHTML = "";
    for (let i = 0; i < number; i++) {
        pares1.innerHTML += `<li> ${i*2}</li>`;
    }
}
//use un for para trabajar directamente con la variable i y obtener los numeros pares.

const ejecicioPares2 = (number) => {
    pares2.innerHTML = "";
    for (let i = 1; i <= number; i++) {
        pares2.innerHTML += `<li> ${i*2}</li>`;
    }
}
// lo mismo que en el ejercicio anterior solo inicie el la variable i en 1 y modifique la condición.

const ejecicioImpar1 = (number) => {
    impares1.innerHTML = "";
    array = [];
    for (let i = 1; i <= number; i = i + 2) {
        array.push(i);
    }
 
    const sumaImpar = array.reduce((a, b) => a + b, 0);
    impares1.innerHTML += `<li> La suma de los impares es: ${sumaImpar}</li>`;
}
// cree un for para obtener los numeros impares, almacene cada impar en un arreglo y luego sume todos los impares.

const ejecicioImpar2 = (number1, number2) => {
    impares2.innerHTML = "";
    let total = 0;
    for (let i = Number(number1); i <= number2; i++) {
        if(i % 2 == 1){
            total += i;
        }
    }
    impares2.innerHTML += `<li> La suma de los impares es: ${total}</li>`;
}
//con el minimo y el maximo cree el for, luego agrege una condición para dejar entrar solo los impares y sumarlos al total.

const ejecicioFibonachi = (number) => {
    fibonachiNumbers.innerHTML = "";
    let anterior = 0;
    let actual = 1;
    for (i = 0; i <= number; i++) {
        fibonachiNumbers.innerHTML += `<li> ${anterior}</li>`;
        actualTemp = actual + (anterior);
        anterior = actual;
        actual = actualTemp;
    }
}
//utilice variables temporales para crear la secuencia de fibonachi, y use un for para lanzar los resultados.



// Con los botones desencadeno las funciones obteniendo los valores de los imput.
exercise1.addEventListener("click", function () {
    const par1 = document.getElementById("par1").value;
    ejecicioPares1(par1);
});

exercise2.addEventListener("click", function () {
    const par2 = document.getElementById("par2").value;
    ejecicioPares2(par2);
});

exercise3.addEventListener("click", function () {
    const impar1 = document.getElementById("impar1").value;
    ejecicioImpar1(impar1);
});

exercise4.addEventListener("click", function () {
    const min = document.getElementById("min").value;
    const max = document.getElementById("max").value;
    ejecicioImpar2(min, max);
});

exercise5.addEventListener("click", function () {
    const fibonachi = document.getElementById("fibonachi").value;
    ejecicioFibonachi(fibonachi);
});
