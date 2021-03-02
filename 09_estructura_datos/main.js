const arrayNumber = (arreglo, retorno) => {
    if (retorno > arreglo.length) {
        return console.log(`El arreglo solo tiene ${arreglo.length} elementos`);
    }
    const nuevoArreglo = arreglo.slice(0, retorno);
    console.log(nuevoArreglo);
}

// arrayNumber(["morado", "verde", "amarillo", "azul", "rojo"], 3);
// arrayNumber(["Jamilett", "Charlie", "Ana"], 2)

// let colores = ["morado", "verde", "amarillo", "azul", "rojo"];
// colores.splice(2, 0, "gris", "negro");
// console.log(colores);

// 2. Escribe una función “reemplazar” que tenga como parámetros un arreglo de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de el arreglo, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

const reemplazar = (array, segundo, tercero) => {

    let repetido = false;

    for (let i = 0; i <= array.length; i++) {
        if (tercero === entrada) {
            if (repetido === true) {
                let reemplazo = array.splice(i);
                reemplazo = array.push(segundo);
                return console.log(array);
            }
            repetido = true;
        }


    }
}

// reemplazar = ([3, 2, 3, 4], 8, 3);

//NO AFECTA EL ARRAY ORIGINAL SLICE
//SI AFECTA EL ARRAY ORIGINAL SPLICE

const route = ["Cd. Chihuaha", "Camargo", "Delicias", "Cd. Juarez"]

const comeBack = (routeIngresada) => {
    /*  
        const [a,b,...routeAntesDelCambio] = routeIngresada;
        console.log(a)
        console.log(b)
    */
    const routeAntesDelCambio = new Array(routeIngresada)

    console.log(routeAntesDelCambio)
        //... -> spread functions, guardar desde posición 0 hasta el final
        // creando un copia identica
    routeAntesDelCambio.splice(1, 0, 'Ciudad X');
    const reverseRoute = routeAntesDelCambio.reverse();
    return `Ruta de ida: ${routeIngresada} ---- Ruta de vuelta: ${reverseRoute}`
}

// console.log(comeBack(route));

// 1 .- Crear una función que encuentre el número más repetido en un array
// Ej. Input - [3,6,1,8,2,3,6,3,2,5,6]
// Salida -> 6

const miArreglo = [1, 2, 1, 2];
// let j = 0;

const repetido = (arreglo) => {
    arreglo.sort();
    let arregloRepetidos = [];
    let Numrepetido = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === arreglo[i + 1]) {
            const element = arreglo[i];
            arregloRepetidos.push(element);
        }
    }

    for (let i = 0; i < arregloRepetidos.length; i++) {
        if (arregloRepetidos[i] === arregloRepetidos[i + 1]) {
            Numrepetido = arregloRepetidos[i];
        }
    }

    console.log(`Sorted Array --------> ${arreglo}`);
    console.log(`Arreglo Repetidos --------> ${arregloRepetidos}`);
    console.log(`Numero más repetido --------> ${Numrepetido}`);

}
repetido(miArreglo);