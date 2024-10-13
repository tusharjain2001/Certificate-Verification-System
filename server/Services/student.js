const student  = require("../models/student")
const bcrypt  = require("bcrypt")

async function createstudent(studentData){
        const{name,email,password} = studentData
        const hashedPassword = await bcrypt.hash(password, 10);

        const createdstudent = new student({
            name,
            email,
            password: hashedPassword
            
        })

        const savedstudent = await createdstudent.save();
        return savedstudent;
}

module.exports = {createstudent};