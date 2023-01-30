var arreglo = [];

function ejercicio1(largoArreglo){
    for (let i = 1; i < largoArreglo; i *= 2) {
        arreglo.push(i)
        
    }
}
ejercicio1(5)
console.log(arreglo)