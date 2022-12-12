const Product = require('../models/Product')

const ProductController = {

 async createProduct(req,res){
    const bodyData = req.body
    const { user_id } = req.params
    try {
        
        const newProduct = await Product.create({username:user_id, ...bodyData});
        await newProduct.populate('username');
        return res.status(200).json(newProduct)
    } catch (error) {
        return res.status(400).json(error)
    }

 },

 async getUsersProducts(req,res){
    const { user_id } = req.params
    try {
        
        const productOfAnUser = await Product.find({username: user_id})
        
        if(!productOfAnUser) return res.status(401)
        return res.status(200).json(productOfAnUser);
    } catch (error) {
        return res.status(400).json(error);
    }
 },

 async updateProduct(req,res){
   const bodyData = req.body
   const { product_id, user_id } = req.params

    try {
      const updatedProduct = await Product.findByIdAndUpdate(product_id, bodyData, {new:true})
      if (updatedProduct === null ) return res.status(400).json({msg:"Erro ao atualizar o produto "});
      return res.status(200).json(updatedProduct)

    } catch (error) {
      return res.status(400).json(error);
    }
 },

 async deleteProduct(req,res){

   const { product_id, user_id } = req.params

   try {
     
     const deletedProduct = await Product.findByIdAndDelete(product_id);
     if (deletedProduct === null ) return res.status(400).json({msg:"Não existe este produto no carrinho!"});
     return res.status(200).json(deletedProduct)

   } catch (error) {
      return res.status(400).json({erro:"Este produto não existe"});
   }
 },

 async getProduct(req,res){
    try {
        const products = await Product.find()
        return res.status(200).json(products);

    } catch (error) {
        return res.status(400).json(error);
    }
 },

 async getProductById(req, res){
      const  { product_id } = req.params
    try {
        const product = await Product.findById(product_id)
      return res.status(200).json(product)
    } catch (error) {
      return res.status(400).json(error)
    }
 }

}

module.exports = ProductController