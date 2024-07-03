const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    max: 130,
  },
  instructor: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Course = new mongoose.model("Course", CourseSchema);

module.exports = Course;
