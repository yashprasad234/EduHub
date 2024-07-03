const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 72,
  },
  purchasedCourses: {
    type: Array,
    required: false,
  },
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;
