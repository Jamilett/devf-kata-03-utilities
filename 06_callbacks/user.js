// Función que traerá al usuario
// Tiene 2 parametros
// idUsuario = numero
// la función que llamará

const getUserById = (id, callback) => {
    // Declaramos obj user
    const user = {
        name: "Jam", // la llave es name y el valor es Jam
        id: id // la llave es id y el valor es el id
    };
    console.log("funcion", callback);
    callback(user); // Ejecutamos la función
}

// Mando llamar la función
getUserById(1, (user) => { // función anonima que estoy creando pero no se ejecuta
    console.log(user); // Imprime los valores de mi objeto
})

// Ver ejemplo userClean