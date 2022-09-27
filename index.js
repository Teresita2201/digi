import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from  "path";
import multer from "multer";
import router from "./routers";
import {v4 as uuid} from "uuid";


//import mongoose
import mongoose from 'mongoose';


mongoose.Promise=global.Promise;
const dbURL='mongodb+srv://digi:<password>@atlascluster.xfiuam4.mongodb.net/test';
mongoose.connect(dbURL, {useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log('conectado al servidor BD'))
.catch(err=>console.log(err));
//heredando de la clase express
const app=express();


//definicion de puerton
app.set('port', process.env.PORT || 4000);

//midlewares de conexion http
app.use(morgan("dev"));
app.use(cors());

//validacion de datos 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// carga archivos
const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'public/imagenes')
    },
    filename:(req, file, cb)=>{
        cb(null,uuid()+path.extname(file.originalname))
    }
})

app.use(multer({storage}).single('image'));
//definicion de rutas
app.use('/api',router);

//para poder escuhar a el servidor 
app.listen(app.get('port'), ()=>{
    console.log('servidor se ejecuta en el puerto' + " " +app.get('port'));
});

