const Cart = require('../models/Cart')

const CartController = {
    async createCart(req,res){
        const bodyData = req.body
        const { user_id }= req.params
        try {
            const createdCart = await Cart.create({...bodyData, username:user_id});
           await createdCart.populate('products')
            return res.status(200).json(createdCart)
        } catch (error) {
            return res.status(400).json(error)
        }


    },
async getUserCart(req, res){
    const { user_id } = req.params

    try {
        const userCart = await Cart.find({ username: user_id})
        .populate('username')
        .populate('products');
        return res.status(200).json(userCart)
    } catch (error) {
        return res.status(400).json(error)
    }
},

async getCart(req,res){
    const { user_id, cart_id } = req.params

    try {
        const cart = await Cart.findById(cart_id).populate('products')
        return res.status(200).json(cart)
    } catch (error) {
        return res.status(400).json(error)
    }
}


}

module.exports = CartController