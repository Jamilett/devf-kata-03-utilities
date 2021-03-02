// Vanilla JS
var x = 10;
// console.log(x);
x = 500;
// console.log(x);
var x = 'Hola';
// console.log(x);

//-------------------------------> ECMA6 <--------------------------------

//*----- let 
let y = 50;
// console.log(y);

y = 100;
// console.log(y);

//*------ const
const z = '500';
// console.log(z);
// z = '800';
// console.log(z)

//*------Spread Operator

let frutas = ['sandia', 'melon', 'platano'];

console.log(frutas);
console.log(...frutas)
console.log('sadia', 'melon', 'platano')

//*-----  String Template

let name = 'Ricardo';
let saludo = 'hola';

// Hola, ricardo, como estas?

console.log(saludo + ', ' + name + ', como estas?');
// Comilla francesa que permite acceder a variables con ${nombreVariable}
console.log(`${saludo}, ${name}, como estas?`);
console.log('🔥');


// *----- Arrow fuction o funciones de flecha
// Es igual que function pero mejorado, ya no se usará function

const suma = (a, b) => { // Se guarda en una variable (cons)
    return a + b
}
suma(5, 10)