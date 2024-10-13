const authService = require("../Services/loginManager")

async function loginManager(req,res) {
    try {
        const {email,password} = req.body;
        const token = await authService.loginManager(email,password)
        res.json({token : token});
    }catch(error) {
        res.status(401).json({message : "invalid credentials"})
    }
}

module.exports = {loginManager}