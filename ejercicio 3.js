/*Dado un arreglo de strings que contiene los días de la semana, cree una función que le
permita obtener un día en particular si se recibe su número correspondiente.
Ej: 1 = Lunes , 7 = Domingo. */

var semana = ["Lunes","Martes","Miercoles","Jueves", "Viernes","Sábado","Domingo"]

var numDia = 7;

function encontrarDia(dia,arreglo){
    return arreglo[dia - 1]
}

var diaEncontrado = encontrarDia(numDia,semana);

console.log("========================================")
console.log("Ejercicio 3")
console.log("Arreglo semana: " + semana);
console.log("Dia a buscar: " + numDia)
console.log("Dia encontrado: " + diaEncontrado)