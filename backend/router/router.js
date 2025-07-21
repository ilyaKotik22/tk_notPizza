const Router = require('express')
const router = new Router()
const userController = require('../controller/controller.js')


router.get('/items', userController.getItems)
router.get('/data', userController.getData)
router.post('/putBasket', userController.putInBasket)
router.get('/basket', userController.getBasket)
router.post('/crementBasket', userController.crementBasket)
router.post('/putInUser', userController.putInUser)
router.get('/user',userController.getUser)
module.exports = router