import routerx from 'express-promise-router';
import puntuacionController from '../controllers/puntuacion';
const router=routerx();
    router.post('/guardarCal',puntuacionController.addCal);
    router.get('/consultarCal',puntuacionController.consultarCal);
    

export default router;