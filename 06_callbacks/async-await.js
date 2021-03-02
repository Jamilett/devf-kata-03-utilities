// Este codigo no se correrá, es conceptual
// Prpósito: Hacer funciones asincronas 

// ------- Callback ---------
// Callback hell -> La identación de N callbacks
// req: petición
// res: respuesta
const pedirUsuarioC = (req, res) => {
    // Este codigo tardará en hacer porque es de una base de datos
    Usuario.buscarID(req.UsuarioID, (err, user) => {
        if (err) {
            console.log("Error");
        } else {
            // va a tardar
            Edad.buscarEdad(user.edad, (err, edad) => {
                if (err) {
                    console.log("Error al buscar edad");
                } else {
                    edad === true;
                }
            });
        }
    })
}

// -------- Promesas ---------
const pedirUsuarioC = (req, res) => {
    Usuario.buscarID(req.UsuarioID)
        .then((user) => { // Cuando logre hacer esto
            return Edad.buscarEdad(user.edad); // Devuelve la edad del usuario
        })
        .then((edad) => { // Cuando acabes lo otro
            edad === true; // Haz esto
            res.save(edad); // (Save es una función de res) Guarda el atributo 
        })
        .catch((err) => { // si algo falla
            res.send(err); // (Send es una función de res) Regresa el error correspondiente
        })
}

// ------- Async-Await --------
// Aquí no hay manejo de errores con then, se usa try y catch
const pedirUsuarioAA = async(req, res) => { // Antes de usar un "await" debo tener un "async"
    try {
        const USER = await Usuario.buscarID(req.UsuarioID) // Se guarda en una variable la petición
        const AGE = await Edad.buscarEdad(user.edad); // Esta esperando que se ejecute algo que no depende de mí
        edad === true;
    } catch (err) {
        res.send(err);
    }
}