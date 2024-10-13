const authService = require("../Services/loginStudent")

async function loginstudent(req,res) {
    try {
        const {email,password} = req.body;
        const token = await authService.loginstudent(email,password)
        res.json({token : token});
    }catch(error) {
        res.status(401).json({message : "invalid credentials"})
    }
}

module.exports = {loginstudent}