// Hacer una funcion que haga una petición 
// (Ejemplo: peticionLibro("i robot");
// Buscar un libro y traer el o los autores del primer libro
// http://openlibrary.org/search.json?q=i+robot)

const askBook = (book) => {
        const request = require("request");
        // ?: significa que recibe un parametro
        // Todo lo que está antes del ? es la URI (sin el digno)
        // También se le conoce como endpoint
        request.get(`http://openlibrary.org/search.json?q=${book}`, (error, response, body) => {
            if (response.statusCode === 200) {
                const data = JSON.parse(body);

                console.log(`Nombre libro: ${data.docs[0].title_suggest}`);
                console.log(`Autor(es): ${data.docs[0].author_name}`);

            } else {
                console.log(`Ocurrió un error en la petición ---> ${error}`);
            }
        })
    }
    // askBook("i robot");

const getBook = () => {
    const request = require("request");
    request.get(`http://openlibrary.org/search.json?author=asimov`, (err, res, body) => {
        if (res.statusCode === 200) {
            const data = JSON.parse(body);
            // console.log(data);
        } else {
            console.log("Error");
        }
    })
}

getBook();