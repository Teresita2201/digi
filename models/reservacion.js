import mongoose, {Schema} from 'mongoose';

const reservacion=new Schema({
    Nombre: String,
    num_tarjeta:Number,
    clave_cvv:Number,
    fecha_ven:Number,
    filename:String,
    path:String,
    crearAc:{type:Date, default: Date.now}


});

const Reservacion=mongoose.model('reservacion', reservacion);
export default Reservacion;