var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : '192.168.87.55',
    database : 'pm_agroalianza2020',
    user : 'consultaaal',
    password : 'aal.1234',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});