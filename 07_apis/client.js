const request = require("request"); // Jala el request de la dependencia y es una constante que no cambia
// Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

console.log("Empezando a hacer peticiones");

// nodemon + nombre archivo: Muestra en la terminal los resultados sin ncsidad de abrir chrome
// ctrl + c rompe el nodemon

//documentación de la petición https://www.npmjs.com/package/request
// NPM: sistema de gestión de paquetes, nos sirve para hacer consultas
// Comandos: npm init -> npm i request: Crearán los archivos node_modules y packages.json
// request es la dependencia que instalamos
// request(parametroURL, (callback(err, res, body)))

request("https://www.google.com", (error, response, body) => {
    console.log(response.statusCode); // Muestra el status de la response http (https://httpstatusdogs.com/)
    console.log(error); // Regresa un error si existe
    console.log("Que es body?");
    // console.log(body); // Regresa el cuerpo del index.html
})
console.log("Terminó la petición");