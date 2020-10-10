const router = require('express').Router();

const apiIngresosRouter = require('./api/ingresos');
const apiEgresosRouter = require('./api/egresos');
const apiCategoriasRouter = require('./api/categorias');
const apiUsersRouter = require('./api/users');
const middlewares = require('./middlewares');


router.use('/ingresos', middlewares.checkToken, apiIngresosRouter);
router.use('/egresos', middlewares.checkToken, apiEgresosRouter);
router.use('/categorias', middlewares.checkToken, apiCategoriasRouter);
router.use('/users', apiUsersRouter);

module.exports = router;