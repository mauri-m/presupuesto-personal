const router = require('express').Router();

const {
    Ingreso
} = require('../../db');


// router.get('/', async (req, res) => {
//     const ingresos = await Ingreso.findAll();
//     res.json(ingresos);
// });

router.get('/:userId', async (req, res) => {
    const ingreso = await Ingreso.findAll({
        where: {
            userId : req.params.userId
        }
    })
    res.json(ingreso);
});



router.post('/', async (req, res) => {
    const ingreso = await Ingreso.create(req.body);
    res.json(ingreso);
});


router.put('/:ingresoId', async (req, res) => {
    await Ingreso.update(req.body, {
        where: {
            id: req.params.ingresoId
        }
    });
    res.json({
        success: 'se ha modificado'
    });
});


router.delete('/:ingresoId', async (req, res) => {
    await Ingreso.destroy({
        where: {
            id: req.params.ingresoId
        }
    });
    res.json({
        success: 'se ha borrado el ingreso'
    });
});


module.exports = router;