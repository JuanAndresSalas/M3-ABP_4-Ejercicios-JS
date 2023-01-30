
/*Cree un programa que dado un arreglo de números desordenados los ordene
ascendentemente.*/

//Generador arreglo con numeros aleatorios
function numerosAleatoriosNoRepetidos(min, max, cantidad) {
    let numeros=[];          
            
    if (min>max || cantidad>max-min) {
        return false;
    }

    while (numeros.length<cantidad) {
        const num=Math.floor((Math.random() * (max - min)) + min );
        if (numeros.indexOf(num)==-1) {
            numeros.push(num);
        }
    }
    return numeros;
}

var cantidadElementos = 10
var arreglo = numerosAleatoriosNoRepetidos(1,999 ,cantidadElementos);
// Fin generador de arreglo

function ordenar(array){
    return array.sort(function(a, b){return a - b})
}

console.log("========================================")
console.log("Ejercicio 5")
console.log("Arreglo Desordenado: [" + arreglo + "]")
console.log(ordenar(arreglo))