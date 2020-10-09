const router = require('express').Router();

const apiIngresosRouter = require('./api/ingresos');
const apiEgresosRouter = require('./api/egresos');
const apiUsersRouter = require('./api/users');


router.use('/ingresos', apiIngresosRouter);
router.use('/egresos', apiEgresosRouter);
router.use('/users', apiUsersRouter);

module.exports = router;