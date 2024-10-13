const userService = require("../Services/student");
async function createstudent(req, res) {
  try {
    const studentData = req.body;
    const student = userService.createstudent(studentData);
    res
      .status(201)
      .json({ user: student, message: "user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createstudent };
