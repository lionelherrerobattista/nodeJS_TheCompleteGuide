const express = require('express');

const app = express();

/*
app.use((req, res, next) => {
    console.log('First function');
    next()
});

app.use((req, res, next) => {
    console.log('Second function');
    res.send('<h1>Welcome</h1>');
});
*/

app.use('/users', (req, res, next) => {
    console.log('First function');
    res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Second function');
    res.send('<h1>Welcome</h1>');
});


app.listen(3000);