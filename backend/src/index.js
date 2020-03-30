const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
    //origin: http://blablabla.com
}));

app.use(express.json()); // falando para o express ir no corpo da requisição e transformar em formato json

app.use(routes);

app.listen(3333);