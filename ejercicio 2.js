/* Cree una función que dado un arreglo de números de largo 10 permita obtener el mayor
número contenido en el arreglo */



/*Cree una función que dado un arreglo de números de largo 10 permita obtener el mayor
número contenido en el arreglo */

//Generador arreglo
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
//fin generador arreglo

function encontrarMayor(array){
    return Math.max(...array)
}


var numMayor = encontrarMayor(arreglo)
console.log("========================================")
console.log("Ejercicio 2")
console.log("Arreglo: " + arreglo);
console.log("Numero Mayor: " + numMayor)
