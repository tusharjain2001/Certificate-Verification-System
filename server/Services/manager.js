const manager = require("../models/manager");
const bcrypt = require("bcrypt");

async function createManager(managerData) {
  const { name, email, password } = managerData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const createdManager = new manager({
    name,
    email,
    password: hashedPassword,
  });

  const savedmanager = await createdManager.save();
  return savedmanager;
}

module.exports = { createManager };
