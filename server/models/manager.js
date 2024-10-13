const mongoose = require("../configuration/db");

const managerschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "Password should be at least 8 characters"],
  },
  role : {
    type: String,
    enum: ["manager","student"],
    default:"manager"
  },
});

const manager = mongoose.model("manager", managerschema);

module.exports = manager;
