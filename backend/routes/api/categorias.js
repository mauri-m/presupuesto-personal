const router = require('express').Router();

const {
    Categoria
} = require('../../db');


router.get('/', async (req, res) => {
    const categorias = await Categoria.findAll();
    res.json(categorias);
});


router.post('/', async (req, res) => {
    const categoria = await Categoria.create(req.body);
    res.json(categoria);
});


router.put('/:categoriaId', async (req, res) => {
    await Categoria.update(req.body, {
        where: {
            id: req.params.categoriaId
        }
    });
    res.json({
        success: 'se ha modificado'
    });
});


router.delete('/:categoriaId', async (req, res) => {
    await Categoria.destroy({
        where: {
            id: req.params.categoriaId
        }
    });
    res.json({
        success: 'se ha borrado la categoria'
    });
});


module.exports = router;