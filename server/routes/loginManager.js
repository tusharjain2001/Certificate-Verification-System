const express = require("express");
const cors = require("cors");

const { loginManager } = require("../controllers/loginManager");

const router = express.Router();

router.use(cors());

router.post("/manager/login", loginManager);
module.exports = router;
