/*Cree una función que le permita buscar un elemento contenido en el arreglo.
Nota: el arreglo solo contendrá números, y tendrá un largo máximo de 100. */

var arreglo = [] 

for (let i = 0; i < 100; i++) { // Llenar el arreglo con números del 1 al 100
    arreglo.push(i+1);
}

function encontrarElemento(array,elemento){
    let indice = array.indexOf(elemento);

    if (indice == -1) {
        return elemento + " no se encuentra en el arreglo"
        
    }else{
        return elemento + " se encuentra en el indice " + indice + " del arreglo"
    }
}

var encontrar = 100

console.log(encontrarElemento(arreglo,encontrar))

