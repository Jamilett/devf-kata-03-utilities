// console.log("Hola a todos, esto esta cool");

// setTimeout(function() {
//     console.log("hey");
// }, 1000)

// const timer = (callback, time) => {
//     if (time === 1000) {
//         callback;
//     }
// }

// El callback es una función DENTRO de otra función
const timer = (otraFuncion, time) => {
    console.log("funcion", otraFuncion);
    console.log("time", time);
    for (let index = 0; index <= time; index++) {
        if (index === time) {
            otraFuncion();
        }
    }
}

const saludo = () => {
        console.log("Hey2");
    }
    // la función timer ejecuta a otra función (saludo) el callback es SALUDO
timer(saludo, 2000);

timer(() => {
    console.log("Yo soy el callback");
}, 10000)