// const express = require('express')
// const app = express()
//
// app.get('/', (req, res) => {
//     res.send('Hello i\'m backand!')
// })
// const PORT = 4000
// app.listen(PORT, () => {
//     console.log(`Server started Maya: http://localhost:${PORT}`)
// })

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mybd1",
    password: "root"
});
// тестирование подключения
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
// connection.query("SELECT * FROM internal_users",
//     function(err, results, fields) {
//         console.log(err);
//         console.log(results); // собственно данные
//         console.log(fields); // мета-данные полей
//     });
// // закрытие подключения
// connection.end(function(err) {
//     if (err) {
//         return console.log("Ошибка закрытия соеденения: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });