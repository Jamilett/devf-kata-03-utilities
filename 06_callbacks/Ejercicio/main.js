const { empleados, salarios } = require('./data'); //Forma de acceder y vincular a objetos de otro archivo

// Función para traer ID de empleado
const getEmployeeById = (id, callback) => {
    console.log("Funcion", callback);
    const empleadoDB = empleados.find((empleado) => empleado.id === id);
    // utiliza el arreglo de empleados para acceder al arreglo y guardar el valor en empleadoDB
    // .find es un metodo de los arreglos que recorre el arreglo para 
    // empleado es el callback de .find

    if (!empleadoDB) { // Si no hay empleado, regresará el callback (No existe info)
        return callback("No exixte info de ese ID");
    } // cuando un if tiene un return ya no es necesario usar else
    return callback(null, empleadoDB);
}


// Función para traer salario mediante id de Usuario. Matchea el usuario id y el salario id
const getSalaryById = (user, callback) => {
    const { id, name } = user; // Destructuración del objeto para ir usando los atributos que necesitemos
    const salary = salarios.find(salary => salary.id === user.id);
    if (!salary) { // Si no existe el salario
        return callback(`No está definido el salario del usuario con ID: ${user}`);
    } else {
        const newEmpleado = { // Creamos un nuevo objeto para acceder al nombre del usuario también y le pasamos los atributos de salary
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            ...salary, // Spread sintaxis: jala todos los atributos de salario // guarda el restante del arreglo
            name: name // No es necesario poner dos name
        }
        callback(null, newEmpleado);
    }
}

getEmployeeById(2, (err, user) => {
    if (err) {
        return console.log(err);
    }
    getSalaryById(user, (otroErr, salary) => {
        if (otroErr) {
            return console.log(otroErr);
        } else {
            console.log(salary);
        }
    })
})