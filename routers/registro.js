import routerx from 'express-promise-router';
import registroController from '../controllers/registro';
const router=routerx();
    router.post('/guardarDatos',registroController.addDatos);
    router.get('/consultarDatos',registroController.consultarDatos);
    router.delete('/eliminarDatos/:id', registroController.deleteDatos);
    router.put('/updateDatos/:id',registroController.updateDatos);

export default router;