const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {
    User
} = require('../../db');

const {
    check,
    validationResult
} = require('express-validator');

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

})


module.exports = router;