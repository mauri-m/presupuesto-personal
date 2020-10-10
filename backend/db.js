const Sequelize = require('sequelize');

const ingresosModel = require('./models/ingresos');
const egresosModel = require('./models/egresos');
const usersModel = require('./models/users');
const categoriasModel = require('./models/categorias');


const sequelize = new Sequelize('presupuesto', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
});



const Ingreso = ingresosModel(sequelize, Sequelize);
const Egreso = egresosModel(sequelize, Sequelize);
const User = usersModel(sequelize, Sequelize);
const Categoria = categoriasModel(sequelize, Sequelize);



sequelize.sync({
        force: false
    })
    .then(() => console.log('Success'))
    .catch((error) => console.log(error))


module.exports = {
    Ingreso,
    Egreso,
    User,
    Categoria
}