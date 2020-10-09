module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: type.STRING,
        password: type.STRING,
        email: type.STRING
    })
}