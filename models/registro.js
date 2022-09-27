import mongoose, {Schema} from 'mongoose';

const registro=new Schema({
    Nombre: String,
    primer_apellido:String,
    profesion:String,
    correo:String,
    contraseña:String,
    crearAc:{type:Date, default: Date.now}


});

const Registro=mongoose.model('registro', registro);
export default Registro;