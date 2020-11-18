const express = require('express');
const { resolveSoa } = require('dns');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware.');
    next(); // allows the request to continue to the next middleware in line
}); // use - adds new middleware function, next is a function that will be passed as argument to the function, to travel to the next middleware

app.use((req, res, next) => {
    console.log('In another middleware.');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);