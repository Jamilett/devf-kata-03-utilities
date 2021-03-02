const { empleados, salarios } = require('./data');

const getEmployeeById = (id) => {
    return new Promise((resolve, reject) => {

        const empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            return reject("No exixte info de ese ID");
        }
        return resolve(empleadoDB);
    })
};

const getSalaryeById = (idEmpleado) => {
    return new Promise((resolve, reject) => {

        const salary = salarios.find((salario) => salario.id === idEmpleado);

        if (!salary) {
            return reject("No existe salario");
        }
        return resolve(salary);
    })
};

getEmployeeById(1)
    .then((empleado) => console.log(empleado))
    // .then(getSalaryeById)
    .catch((reject) => console.log(reject));

getSalaryeById(1)
    .then((salary) => console.log(salary))
    .catch((error) => console.log(error));