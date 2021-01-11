const express = require('express');

const app = express();

//Usar middlewares
//Se van a ejecutar por cada request que se reciba
/*app.use((req, res, next) => {
    console.log('In the middleware!');
    //Paso al middleware siguiente llamando a next()
    next()
});*/

//Se puede definir el path como primer parámetro
//El orden importa!! De lo particular a lo general
app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
    //Cuando se manda una res, no va next()!!
});

//Último, porque toma todo lo que empiece con '/'
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello form Express!</h1>')
});

app.listen(3000);