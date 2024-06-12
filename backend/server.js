const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Conectar a la base de datos SQLite
let db = new sqlite3.Database('backend/db-electronicos.sqlite3', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado a la base de datos SQLite.');
});

// Endpoints CRUD

// Obtener todos los productos
app.get('/api/producto', (req, res) => {
    db.all('SELECT * FROM producto', [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
});

// Obtener un producto por ID
app.get('/api/producto/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM producto WHERE id_producto = ?', [id], (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(row);
    });
});

// Actualizar un producto
app.post('/api/producto', (req, res) => {
    const { id, nombre, descripcion, precio, existencia } = req.body;
    db.run(`UPDATE producto SET nombre = ?, descripcion = ?, precio = ?, existencia = ? WHERE id = ?`, 
    [nombre, descripcion, precio, existencia, id], 
    function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "Producto actualizado", "changes": this.changes });
    });
});

// Eliminar un producto
app.delete('/api/producto/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM producto WHERE id_producto = ?', id, function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "Producto eliminado", "changes": this.changes });
    });
});

// Crear más endpoints para pedidos, proveedores y ventas de manera similar

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});