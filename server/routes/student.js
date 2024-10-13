const express = require("express");
const studentController = require("../controllers/student");

const router  = express.Router();

router.post("/student/register",studentController.createstudent);

module.exports = router;