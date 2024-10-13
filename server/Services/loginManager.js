const bcrypt = require("bcrypt")
const manager = require("../models/manager")
const {generateToken}  = require("../utils/jwtutils")

async function loginManager(email,password) {
    try {
        const existingUser = await manager.findOne({ email });
        if(!existingUser)
        {
            throw new Error("user not found");
        }
        const isPassswordValid = await bcrypt.compare(password,existingUser.password);
        console.log(existingUser.password,isPassswordValid);
        if(!isPassswordValid)
        {
            throw new Error("invalid password")
        }
        const token = generateToken(existingUser);
        return token;
    }catch(error) {
        console.log("login error" , error.message)
        throw new Error("invalid credentials");

    }

}

module.exports = {loginManager}