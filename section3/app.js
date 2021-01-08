const http = require('http'); //importo el módulo core http
const routes = require('./routes'); //exportar localmente

console.log(routes.someText);
/*
//Crear funcion request listener
//Para cada llamada a nuestro servidor
//(Se puede usar una función anónima)
function rqListener(req, res) {

}*/

//Crear servidor
//toma un request listener y devuelve un server
const server = http.createServer(routes.handler);

//Escuchar el servidor 
//recibe un puerto
server.listen(3000); 