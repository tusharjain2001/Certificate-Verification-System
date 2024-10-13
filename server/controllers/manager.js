const userService = require("../Services/manager");
async function createManager(req, res) {
  try {
    const managerData = req.body;
    const manager = userService.createManager(managerData);
    res
      .status(201)
      .json({ user: manager, message: "user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createManager };
