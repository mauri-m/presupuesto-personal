const express = require('express');

const apiRouter = require('./routes/api');

const PORT = process.env.PORT || 3050;

const app = express();

require('./db').default;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log('Servidor iniciado');
})