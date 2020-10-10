const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {

    if (!req.headers['user-token']) {
        return res.json({
            error: 'you must include the token in the header'
        });
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'frase secreta');
    } catch (error) {
        return res.json({
            error: 'Token invalid'
        });
    }

    if ((payload.expiredAt < moment().unix())) {
        return res.json({
            error: 'Token expired'
        });
    }

    req.usuarioId = payload.usuarioId;

    next();
}

module.exports = {
    checkToken: checkToken
};