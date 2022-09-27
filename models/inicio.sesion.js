import mongoose, {Schema} from 'mongoose';

const inicio=new Schema({
    correo: String,
    contraseña:String,
    crearAc:{type:Date, default: Date.now}


});

const Inicio=mongoose.model('inicio', inicio);
export default Inicio;