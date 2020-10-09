const router = require('express').Router();

const {
    Egreso
} = require('../../db');


router.get('/', async (req, res) => {
    const egresos = await Egreso.findAll();
    res.json(egresos);
});


router.post('/', async (req, res) => {
    const egreso = await Egreso.create(req.body);
    res.json(egreso);
});


router.put('/:egresoId', async (req, res) => {
    await Egreso.update(req.body, {
        where: {
            id: req.params.egresoId
        }
    });
    res.json({
        success: 'se ha modificado'
    });
});


router.delete('/:egresoId', async (req, res) => {
    await Egreso.destroy({
        where: {
            id: req.params.egresoId
        }
    });
    res.json({
        success: 'se ha borrado el egreso'
    });
});


module.exports = router;