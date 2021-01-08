const fs = require('fs');

const requestHandler = (req, res) => {
    //Manejar url y método
    const url = req.url;
    const method = req.method;

    /*
    //Partes más importantes del request:
    console.log(req.url, req.method, req.headers);
    */

    if(url === '/') {
        //Enviar un POST
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        //Crear un form con un input
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        
        return res.end();
    }
    
    if(url === '/message' && method === 'POST') {
        const body = [];
        
        //Escuchar evento hasta que termine
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        
        //Cuando el evento termine
        return req.on('end', () => {
            //Crear un nuevo buffer y concatenar el body completo
            const parsedBody = Buffer.concat(body).toString();
            //Tomo el mensaje del body -> message=hola
            const message = parsedBody.split('=')[1];
            //Crear un archivo de manera asíncrona
            fs.writeFile('message.txt', message, err => {
                //Manejar el error
                //res.writeHead(302, {});
                res.statusCode = 302; //302 = redireccionamiento
                res.setHeader('Location', '/');
                return res.end();
            });
        });   
    }
    
    //Response:
    res.setHeader('Content-Type', 'text/html');
    //Escribir en la respuesta:
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    //Terminar de escribir la respuesta:
    res.end();
};

//Formas de exportar
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text',
};

/*
//Otras formas
//module.exports = requestHandler;

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
*/