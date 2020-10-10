module.exports = (sequelize, type) => {
    return sequelize.define('ingresos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        monto: type.DOUBLE,
        concepto: type.STRING,
        userId: {
            type: type.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    })
}