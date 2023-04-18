import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './user/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.get('/users-name', userController.findByName)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

routes.post('/products', productController.create)
routes.get('/products/list', productController.list)
routes.get('/products/writefile', productController.writeFile)
routes.get('/products/readfile', productController.readFile)
routes.get('/stock', stockController.stock)
routes.get('/stock/random', stockController.getRandomFromStock)
routes.get('/stock/total', stockController.getTotalValueFromStock)

export default routes