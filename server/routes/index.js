const Router = require('express');
const router = new Router();

const deviceRoutes = require('./deviceRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');


router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRoutes);

module.exports = router;
