const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3050;

const app = express();

require('./db');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));










//MySql

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'presupuesto'
// });




// //check connect
// connection.connect(error => {
//     if (error) throw error;
//     console.log('Conexion establecida.');
// });


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// //Route
// app.get('/', (req, res) => {
//     res.send('Welcome to my API!');

// });

// app.get('/ingresos', (req, res) => {

//     const sql = 'SELECT * FROM ingresos';

//     connection.query(sql, (error, results) => {
//         if (error) throw error;
//         if (results.length > 0) {
//             res.json(results);
//         } else {
//             res.send('No hay ingresos')
//         }
//     });


// });

// app.get('/ingresos/:id', (req, res) => {

//     const {
//         id
//     } = req.params;

//     const sql = `SELECT * FROM ingresos WHERE id = ${id}`;

//     connection.query(sql, (error, result) => {
//         if (error) throw error;
//         if (result.length > 0) {
//             res.json(result);
//         } else {
//             res.send('No se encuentra el ingreso')
//         }
//     });

// });

// app.post('/ingreso/add', (req, res) => {

//     const sql = 'INSERT INTO ingresos SET ?';

//     const ingresoObj = {
//         monto: req.body.monto,
//         concepto: req.body.concepto
//     }

//     connection.query(sql, ingresoObj, error => {
//         if (error) throw error;
//         res.send('Ingreso creado');
//     })

// });

// app.put('/ingreso/update/:id', (req, res) => {

//     const {
//         id
//     } = req.params;
//     const {
//         monto,
//         concepto
//     } = req.body;
//     const sql = `UPDATE ingresos SET monto = '${monto}', concepto = '${concepto}' WHERE id = ${id}`

//     connection.query(sql, error => {
//         if (error) throw error;
//         res.send('Ingreso modificado!');
//     })

// });

// app.delete('/ingreso/delete/:id', (req, res) => {
//     const {
//         id
//     } = req.params;

//     const sql = `DELETE FROM ingresos WHERE id= ${id}`;
//     connection.query(sql, error => {
//         if (error) throw error;
//         res.send('Ingreso eliminado!');
//     })

// });