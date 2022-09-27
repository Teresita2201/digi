import mongoose, {Schema} from 'mongoose';

const home=new Schema({
    Nombre: String,
    num_tarjeta:Number,
    clave_cvv:Number,
    fecha_ven:Number,
    filename:String,
    path:String,
    crearAc:{type:Date, default: Date.now}


});

const Home=mongoose.model('home', home);
export default Home;