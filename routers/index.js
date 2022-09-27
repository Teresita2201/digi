import routerx from 'express-promise-router';
import pagoRoutes from './pagos.router';
import inicioSesionRouter from './inicio.sesion';
import puntuacion from './puntuacion';
import router from './registro';

const router=routerx();
router.use('/pagos',pagoRoutes);
router.use('/inicio', inicioSesionRouter);
router.use('/puntuacion', puntuacion);
router.use('/registro', router);


export default router;
