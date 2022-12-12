const middlewares = {

    authenticate(req,res,next){
        const {auth} = req.headers
        const { user_id } = req.params
        if(!auth) return res.status(400).json({erro:"No token"})
        if (auth !== user_id) return res.status(400).json({erro:"Não encontrado"})
            
        next()
    }
}

module.exports = middlewares