const { Router } = require('express');
const routes = Router();
const Usercontroller = require('../controllers/UserController');
const SessionController = require('../controllers/LoginUser');
const ProductController = require('../controllers/ProductConstroller');
const CartController = require('../controllers/CartController');
const { authenticate } = require('../middleware/index')
routes.get('/', (req,res)=>{
    res.send('ola mundo')
})


routes.post('/users',Usercontroller.createUser);
routes.get('/users',Usercontroller.getUsers);

routes.get('/users/:user_id',Usercontroller.getUsersById);

routes.post('/sessions',SessionController.createSession);

routes.post('/products/:user_id',authenticate,ProductController.createProduct);
routes.get('/:user_id/products/',ProductController.getUsersProducts);
routes.delete('/products/:user_id/:product_id',authenticate,ProductController.deleteProduct);
routes.patch('/products/:user_id/:product_id',authenticate,ProductController.updateProduct);

routes.get('/products/',ProductController.getProduct);
routes.get('/products/:product_id',authenticate,ProductController.getProductById);

routes.post('/carts/:user_id',authenticate,CartController.createCart);
routes.get('/carts/:user_id',authenticate,CartController.getUserCart);

routes.get('/carts/:user_id/:cart_id',CartController.getCart)
module.exports = routes