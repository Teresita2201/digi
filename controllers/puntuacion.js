import models from '../models';

export default{
    addCal:async(req, res, next)=>{
        try {
            const {calificacion}=req.body;

            const agregarCal=new models.Puntuacion({
                calificacion
            });

            const guardarCal=await agregarCal.save();
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
            const consultarCal=await models.Cal.find();
            res.json(consultarCal);
            console.log(consultarCal);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al conectar"
            });
            next(error);
        }
    },

   
}