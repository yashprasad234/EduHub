const express = require("express");
const authenticateJwt = require("../middleware/auth");
const dotenv = require("dotenv").config();
const SECRET = process.env.AUTH_SECRET;
const Admin = require("../models/Admin.js");
const Course = require("../models/Course.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", (req, res) => {
  res.json({ msg: "Hello duniya from admin" });
});

// register an admin

router.post("/register", async (req, res) => {
  const existingAdmin = await Admin.findOne({ email: req.body.email });
  if (existingAdmin) {
    res.status(403).json({ msg: "Admin already exists" });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new Admin({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newAdmin.save();
    res.json({ msg: "Admin created successfully" });
  }
});

// login as an admin

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({
    email: req.headers.email,
  });
  const validPassword = await bcrypt.compare(
    req.headers.password,
    admin.password
  );
  if (admin && validPassword) {
    const token = jwt.sign({ userId: admin._id, role: "admin" }, SECRET);
    res.json({ msg: "Logged in successfully", token });
  } else {
    res.status(404).json({ msg: "Incorrect username or password" });
  }
});

// create a course

router.post("/courses", authenticateJwt, async (req, res) => {
  const currentAdminId = jwt.verify(
    req.headers.authorization.split(" ")[1],
    SECRET,
    (err, user) => {
      if (err) return;
      return user.userId;
    }
  );
  const currentAdmin = await Admin.findById(currentAdminId);
  if (currentAdmin) {
    const course = new Course({ ...req.body, instructor: currentAdmin.name });
    await course.save();
    res.json({ msg: "course create successfully" });
  } else {
    res.status(403).json({ msg: "Failed to fetch the user" });
  }
});

// get all courses created by you

router.get("/courses", authenticateJwt, async (req, res) => {
  const currentAdminId = jwt.verify(
    req.headers.authorization.split(" ")[1],
    SECRET,
    (err, user) => {
      if (err) return;
      return user.userId;
    }
  );
  const courses = await Course.find({ instructor: currentAdminId });
  res.json({ courses });
});

// get a course created by you

router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  const currentAdminId = jwt.verify(
    req.headers.authorization.split(" ")[1],
    SECRET,
    (err, user) => {
      if (err) return;
      return user.userId;
    }
  );
  const course = await Course.findOne({
    _id: req.params.courseId,
    instructor: currentAdminId,
  });
  res.json({ course });
});

// update course

router.put("/courses/:courseId", authenticateJwt, async (req, res) => {
  const currentAdminId = jwt.verify(
    req.headers.authorization.split(" ")[1],
    SECRET,
    (err, user) => {
      if (err) return;
      return user.userId;
    }
  );
  const course = await Course.findById(req.params.courseId);
  if (course) {
    if (course.instructor === currentAdminId) {
      await Course.findByIdAndUpdate(req.params.courseId, req.body);
      res.json({ msg: "course updated successfully" });
    } else {
      res.status(400).json({ msg: "you cannot update someone else's course" });
    }
  } else {
    res.status(404).json({ msg: "could not find/update the requested course" });
  }
});

// delete course

router.delete("/courses/:courseId", authenticateJwt, async (req, res) => {
  const currentAdminId = jwt.verify(
    req.headers.authorization.split(" ")[1],
    SECRET,
    (err, user) => {
      if (err) return;
      return user.userId;
    }
  );
  const course = await Course.findById(req.params.courseId);
  if (course) {
    if (course.instructor === currentAdminId) {
      await Course.findByIdAndDelete(req.params.courseId);
      res.json({ msg: "course deleted successfully" });
    } else {
      res.status(400).json({ msg: "you cannot delete someone else's course" });
    }
  } else {
    res.status(404).json({ msg: "could not find/delete the requested course" });
  }
});

module.exports = router;
