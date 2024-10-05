const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URI);
console.log(process.env.DB_URI);

mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
