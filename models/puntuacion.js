import mongoose, {Schema} from 'mongoose';

const puntuacion=new Schema({
    calificar: Numero,
    
    crearAc:{type:Date, default: Date.now}


});

const Puntuacion=mongoose.model('puntuacion', puntuacion);
export default Puntuacion;