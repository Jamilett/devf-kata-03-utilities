const request = require("request");
// Una API es un conjunto de servicios REST para ser mas indepndientes CRUD -> Create, Read, Update, Delete
// Los servicios REST se componen de Métodos conocidos como Verbos de http
// get(trae), post(set), put(actualiza), delete(borrar) que reponden con un codigo de http
// get codigo success 200
// post 201
// put 201
// delete 204
const pedirPokemon = (pokemon) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (error, response, body) => { //Accedemos a la info del pokemon pikachu por nombre o por ID
        if (response.statusCode === 200) { // Si es exitosa la petición
            const data = JSON.parse(body); // Va a pasar la info de body a JSON para que lo traiga como arreglo y no como string
            // console.log(data); // Imprime todo el arreglo de objetos
            console.log(`${data.name}`);
        } else {
            console.log(`Ocurrió un error en la petición ---> ${error}`);
        }
    })
}

pedirPokemon(500);
pedirPokemon("pikachu");