import routerx from 'express-promise-router';
import pagosController from "../controllers/pagos_control";
const router=routerx();
    router.post('/guardarTarjeta',pagosController.addTarjeta);
    router.get('/consultarTarjeta',pagosController.consultarTarjeta);
    router.get('/consultarUnaTarjeta/:id',pagosController.consultarUnaTarjeta);
    router.delete('/eliminarTarjeta/:id', pagosController.deleteTarjeta);
    router.put('/updateTarjeta/:id',pagosController.updateTarjeta);

export default router;