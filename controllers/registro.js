import models from '../models';

export default{
    addDatos:async(req, res, next)=>{
        try {
            const {Nombre, primer_apellido, profesion, correo, contraseña}=req.body;

            const agregarTarjeta=new models.Registro({
                Nombre, primer_apellido, profesion, correo, contraseña
            });

            const guardarDatos=await agregarDatos.save();
            res.status(200).json(guardarDatos);
            console.log(req.body);
        } catch (e) {
            res.status(500).send({
                message:"No se encuentra el servidor de BD"
            });
            next(e);
        }
    },

    consultarDatos:async(req,res,next)=>{
        try {
            const consultarDatos=await models.Datos.find();
            res.json(consultarDatos);
            console.log(consultarDatos);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al conectar"
            });
            next(error);
        }
    },

              
    deleteDatos:async(req,res,next)=>{
        try {
            const eliminar=await models.Datos.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        } catch (error) {
            res.status(500).send({
                message: "No se pudo eliminar el dato"
            });
            next(error);
        }
    },
    updateDatos:async(req,res,next)=>{
        try {
            const {Nombre, primer_apellido, profesion, correo, contraseña}=req.body;

            const updateUnaDatos={
                Nombre, primer_apellido, profesion, correo, contraseña
            }

            const update=await models.Datos.findByIdAndUpdate(req.params.id, updateUnaDatos);
            res.json({
                message:"Datos actualizados correctamente" 
            });
            console.log(update);
        } catch (error) {
            res.status(500).send({
                message: "No se pudo actualizar la información"
            })
            next(error);
        }
    }
}