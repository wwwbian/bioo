const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://jos3:p3p3@cluster0.0xkotzd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión a la base de datos correcta');
    })
.catch(err => {
    console.error('Error al conectar a la base de datos:', err);
});

app.listen(port, () => {
    console.log(`el servidor esta en el puerto ${port}`);
});
