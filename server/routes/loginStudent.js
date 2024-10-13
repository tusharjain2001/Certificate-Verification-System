const express = require("express");
const cors = require("cors");

const { loginstudent } = require("../controllers/loginStudent");

const router = express.Router();

router.use(cors());

router.post("/student/login", loginstudent);
module.exports = router;
