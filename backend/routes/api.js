const router = require('express').Router();

const apiIngresosRouter = require('./api/ingresos');
const apiEgresossRouter = require('./api/egresos');


router.use('/ingresos', apiIngresosRouter);
router.use('/egresos', apiEgresossRouter);

module.exports = router;