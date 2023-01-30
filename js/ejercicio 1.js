/*Cree una función que dado un número n cree un arreglo de largo n, donde en cada
posición del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1
*/

function ejercicio1(largoArreglo){
    let arreglo = [];
    let control = 1;
    for (let i = 0; i < largoArreglo ; i ++) {
        arreglo.push(control)
        control *= 2
    }    
}

ejercicio1()
