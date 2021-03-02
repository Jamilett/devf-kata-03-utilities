const getUserById = (id, callback) => {
    // Declaramos obj user
    const user = {
        name: "Jam", // la llave es name y el valor es Jam
        id: id // la llave es id y el valor es el id
    };
    if (user.id === 1) {
        return callback(`El usuario es: ${user.name}`);
    }
    return callback("no hay usuario con el numero de empleado");
}
const saludo = (data) => {
        console.log(data);
    }
    // Mando llamar la función
getUserById(1, saludo);