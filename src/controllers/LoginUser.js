
const User = require('../models/User');

const SessionController ={
    
    async createSession(req,res){
        const { username } = req.body

        try {
            const user = await User.findOne({username})
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json(error)
        }
    }

}
module.exports = SessionController