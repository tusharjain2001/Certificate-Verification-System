require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("../server/configuration/db");
const managerRoute = require("./routes/manager")
const studentRoute = require("./routes/student")
const loginManager = require("./routes/loginManager")
const loginStudent = require("./routes/loginStudent")
const bodyParser = require("body-parser")

//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/",managerRoute);
app.use("/",studentRoute);
app.use("/",loginManager);
app.use("/",loginStudent);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}...`));
