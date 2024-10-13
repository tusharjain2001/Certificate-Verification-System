const express = require("express");
const managerController = require("../controllers/manager");

const router  = express.Router();

router.post("/manager/register",managerController.createManager);

module.exports = router;