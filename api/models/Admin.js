const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 72,
  },
  coursesPosted: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Course",
    required: false,
  },
});

const Admin = new mongoose.model("Admin", AdminSchema);

module.exports = Admin;
