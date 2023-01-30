/* Cree una función que dado un arreglo de números de largo 10 permita obtener el mayor
número contenido en el arreglo */

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
var arreglo = numerosAleatoriosNoRepetidos(1,999 ,10);
// Fin generador de arreglo

//Código tarea
function compareNumbers(a, b) { //Funcion para ordenar arreglos de numeros en JS, se debe invocar como argumento de la funcion sort()
    return a - b;
  }

function encontrarMayor(array){
    array.sort(compareNumbers);
    return array[array.length - 1]
}


var numMayor = encontrarMayor(arreglo)

