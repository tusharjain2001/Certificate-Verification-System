const bcrypt = require("bcrypt");
const student = require("../models/student");
const { generateToken } = require("../utils/jwtutils");

async function loginstudent(email, password) {
  try {
    const existingUser = await student.findOne({ email });
    if (!existingUser) {
      throw new Error("user not found");
    }
    const isPassswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPassswordValid) {
      throw new Error("invalid password");
    }
    const token = generateToken(existingUser);
    return token;
  } catch (error) {
    throw new Error("invalid credentials");
  }
}

module.exports = { loginstudent };
