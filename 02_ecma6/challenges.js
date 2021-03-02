// ------------------- Palindromo --------------------
let cadena = "Ligar es ser ágil";
let invertida = "";

// Función que regresa si un String es palindromo o no
const esPalindromo = (cadena) => {
    //string = variable que normalizará la cadena ingresada, reemplazará acentos, caracteres y espacios en blanco mediante REGEX
    const string = cadena.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[\W_]/g, '');
    console.log(`"Cadena Normalizada:" ${string}`);

    // Ciclo encargado de iterar los caracteres de la cadena de atrás hacia adelante y asinar los valores a la cadena invertida
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string.charAt(i);
    }
    console.log(`"Cadena Invertida:" ${invertida}`);

    // Condicional que evalúa si ambas cadenas son iguales
    if (string === invertida) {
        return console.warn(`"${cadena}" ES palindromo`);
    } else {
        return console.error(`"${cadena}" NO es palindromo`);
    }
}

esPalindromo(cadena, invertida);

// --------------- Conversión °F -> °C -----------------
const farenheitToCelsius = (farenheit) => {
    let celsius = ((farenheit - 32) * 5) / 9;
    return console.warn(`${farenheit} °F = ${celsius} °C`);
}

console.log("Ejercicio °F a °C");
farenheitToCelsius(32)

// --------------- Paises -----------------
let arregloPaises = ["Mexico", "Colombia", "Estados Unidos", "Canada", "Chile", "Emiratos Arabes Unidos"];
let numeroLetras = 0;
let longestIndex = 0;

const longestCountry = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > numeroLetras) {
            numeroLetras = array[i].length;
            longestIndex = array[i];
        }
    }
    console.log(...array);
    return console.warn(`El país con mayor número de letras es: ${longestIndex} (Letras: ${numeroLetras})`);
}

longestCountry(arregloPaises)