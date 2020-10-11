const router = require('express').Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');

const {
    User
} = require('../../db');

const {
    check,
    validationResult
} = require('express-validator');

router.get('/validation', (req, res) => res.json({ success: false}));

router.post('/register', [
    check('user', 'User invalid').not().isEmpty(),
    check('password', 'Password invalid').not().isEmpty(),
    check('email', 'Email invalid').isEmail()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errores: errors.array()
        })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

});

router.post('/login', async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (user) {
        const verificar = bcrypt.compareSync(req.body.password, user.password);
        if (verificar) {
            res.json({
                success: createToken(user),
                id: user.id
            });
        } else {
            res.json({
                error: 'Error in user or password'
            });
        }
    } else {
        res.json({
            error: 'Error in user or password'
        });
    }
});


const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'frase secreta');
}

module.exports = router;