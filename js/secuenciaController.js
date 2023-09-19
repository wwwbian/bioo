const mongoose= require('mongoose')
const secuenciaSchema= new mongoose({
    type: String,
    sequence: String,
});
const sequence= mongoose.model('Secuencia', sequenceSchema);
module.exports= secuencia