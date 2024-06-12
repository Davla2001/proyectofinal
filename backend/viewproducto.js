const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos SQLite
let db = new sqlite3.Database('backend/db-electronicos.sqlite3', (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Conectado a la base de datos SQLite.');

    // Consulta para obtener todos los productos
    db.all('SELECT * FROM producto', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('Datos de la tabla "producto":');
        console.table(rows);

        // Cerrar la conexión a la base de datos
        db.close((err) => {
            if (err) {
                console.error(err.message);
                return;
            }
            console.log('Cerrada la conexión a la base de datos.');
        });
    });
});
