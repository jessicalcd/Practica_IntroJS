//Solución del ejercicio 2

const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    // Cambio el operador de comparacion en el for para que i no intente acceder fuera dek rango.
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

//Muestro en consola el promedio que es igual a 3
console.log(promedioNumeros);
