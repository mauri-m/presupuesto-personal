module.exports = (sequelize, type) => {
    return sequelize.define('egresos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        monto: type.DOUBLE,
        categoria: type.STRING,
        descripcion: type.STRING
    })
}