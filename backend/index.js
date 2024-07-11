require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./DB/db');
const taskRoutes = require('./routes/tasks');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/tasks', taskRoutes);

// Teste de conexão com o banco de dados
db.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
    } else {
        console.log('Conexão com o banco de dados bem-sucedida.');
        console.log('Hora atual do banco de dados:', res.rows[0].now);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});