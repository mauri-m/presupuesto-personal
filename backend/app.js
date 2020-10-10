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

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(PORT, () => {
    console.log('Servidor iniciado');
})