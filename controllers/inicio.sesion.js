import models from '../models';

export default{
    addDatos:async(req, res, next)=>{
        try {
            const {correo, contraseña}=req.body;

            const agregarTarjeta=new models.Inicio({
                correo, contraseña
            });

            const guardarDatos=await agregarDatos.save();
            res.status(200).json(guardarDatos);
            console.log(req.body);
        } catch (e) {
            res.status(500).send({
                message:"No se encuentra el servidor de BD"
            });
            next(e);
        }},
        consultarTarjeta:async(req,res,next)=>{
            try {
                const consultarDatos=await models.Inicio.find();
                res.json(consultarDatos);
                console.log(consultarDatos);
            } catch (error) {
                res.status(500).send({
                    message:"Ocurrio un error al conectar"
                });
                next(error);
            }
          
        },
    
}