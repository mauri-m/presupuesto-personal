module.exports = (sequelize, type) => {
    return sequelize.define('ingresos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        monto: type.DOUBLE,
        concepto: type.STRING
    })
}