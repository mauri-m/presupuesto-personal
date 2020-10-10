module.exports = (sequelize, type) => {
    return sequelize.define('egresos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        monto: type.DOUBLE,
        descripcion: type.STRING,

        categoriaId: {
            type: type.INTEGER,
            references: {
                model: 'categorias',
                key: 'id'
            }
        },
        userId: {
            type: type.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });
}