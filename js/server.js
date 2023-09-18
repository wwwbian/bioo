const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
mongoose.connect('mongodb+srv://maymay:ireneydraco@biologia.pkvneqx.mongodb.net/Biologia')
.then(()=>{
console.log('Conexion a mongoose lista')
})
.catch((err)=>{
    console.log('Error de conexion a mongoose:', err)
    })
    

app.listen(port, () => {
  console.log(`el servidor esta en el puerto ${port}`);
    });
