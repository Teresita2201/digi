import models from '../models';

export default{
    addTarjeta:async(req, res, next)=>{
        try {
            const {Nombre,num_tarjeta,clave_cvv,fecha_ven}=req.body;

            const agregarTarjeta=new models.Tarjeta({
                Nombre,num_tarjeta,clave_cvv,fecha_ven
            });

            const guardarTarjeta=await agregarTarjeta.save();
            res.status(200).json(guardarTarjeta);
            console.log(req.body);
        } catch (e) {
            res.status(500).send({
                message:"No se encuentra el servidor de BD"
            });
            next(e);
        }
    },

    consultarTarjeta:async(req,res,next)=>{
        try {
            const consultarTarjeta=await models.Tarjeta.find();
            res.json(consultarTarjeta);
            console.log(consultarTarjeta);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al conectar"
            });
            next(error);
        }
    },

    consultarUnaTarjeta:async(req,res,next)=>{
        try {
            const consultarOneTarjeta=await models.Tarjeta.findById(req.params.id);
            if(!consultarOneTarjeta){
                res.status(404).send({
                    message:"El registro no existe"
                });
            }else{
                res.status(200).json(consultarOneTarjeta);
            }
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(error);
        }
    },
    deleteTarjeta:async(req,res,next)=>{
        try {
            const eliminar=await models.Tarjeta.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        } catch (error) {
            res.status(500).send({
                message: "No se pudo eliminar el dato"
            });
            next(error);
        }
    },
    updateTarjeta:async(req,res,next)=>{
        try {
            const {Nombre,num_tarjeta,clave_cvv,fecha_ven}=req.body;

            const updateUnaTarjeta={
               Nombre, num_tarjeta,clave_cvv,fecha_ven
            }

            const update=await models.Tarjeta.findByIdAndUpdate(req.params.id, updateUnaTarjeta);
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