const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Usar middlewares
//Se van a ejecutar por cada request que se reciba
/*app.use((req, res, next) => {
    console.log('In the middleware!');
    //Paso al middleware siguiente llamando a next()
    next()
});*/

//Registra un middleware, parsea el body del html y hace un next();
app.use(bodyParser.urlencoded());

//Se puede definir el path como primer parámetro
//El orden importa!! De lo particular a lo general
app.use('/add-product', (req, res, next) => {
    //Creo un from para enviar el producto
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    //Cuando se manda una res, no va next()!!
});

app.post('/product', (req, res, next) => {
    //Recibe el body parseado como objeto javascript
    console.log(req.body);
    res.redirect('/');
});

//Último, porque toma todo lo que empiece con '/'
app.use('/', (req, res, next) => {
    res.send('<h1>Hello form Express!</h1>')
});

app.listen(3000);