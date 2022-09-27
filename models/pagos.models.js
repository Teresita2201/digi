import mongoose, {Schema} from 'mongoose';

const pagos=new Schema({
    Nombre: String,
    num_tarjeta:Number,
    clave_cvv:Number,
    fecha_ven:Number,
    filename:String,
    path:String,
    crearAc:{type:Date, default: Date.now}


});

const Pagos=mongoose.model('pagos', pagos);
export default Pagos;