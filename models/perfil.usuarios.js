import mongoose, {Schema} from 'mongoose';

const perfil=new Schema({
    Nombre: String,
    num_tarjeta:Number,
    clave_cvv:Number,
    fecha_ven:Number,
    filename:String,
    path:String,
    crearAc:{type:Date, default: Date.now}


});

const Perfil=mongoose.model('perfil', perfil);
export default Perfil;