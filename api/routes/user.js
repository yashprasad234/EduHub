const express = require("express");
const authenticateJwt = require("../middleware/auth");
const dotenv = require("dotenv").config();
const SECRET = process.env.AUTH_SECRET;
const User = require("../models/User.js");
const Course = require("../models/Course.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", (req, res) => {
  res.json({ msg: "Hello duniya from User" });
});

// register a user

router.post("/register", async (req, res) => {
  const existingUser = await User.findOne({ email: newUser.email });
  if (existingUser) {
    res.status(403).json({ msg: "User already exists" });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ msg: "User created successfully" });
  }
});

// login as an User

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.headers.email,
  });
  const validPassword = await bcrypt.compare(
    req.headers.password,
    user.password
  );
  if (user && validPassword) {
    const token = jwt.sign({ userId: user._id, role: "user" }, SECRET);
    res.json({ msg: "Logged in successfully", token });
  } else {
    res.status(404).json({ msg: "Incorrect username or password" });
  }
});

// get all courses

router.get("/courses", authenticateJwt, async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
});

// get a course

router.get("/courses/:courseId", authenticateJwt, async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  res.json({ course });
});

// purchase a course

router.put("/courses/:courseId", authenticateJwt, async (req, res) => {
  const currentUserId = jwt.verify(
    req.headers.authorization.split(" ")[1],
    SECRET,
    (err, user) => {
      if (err) return;
      return user.userId;
    }
  );
  const course = await Course.findById(req.params.courseId);
  const user = await User.findById(currentUserId);
  if (user) {
    if (!user.purchasedCourses.includes(course._id)) {
      user.purchasedCourses.push(course._id);
      await user.save();
      res.json({ msg: "course purchased successfully" });
    } else {
      res.status(403).json({ msg: "you have already bought this course" });
    }
  } else {
    res.status(404).json({ msg: "unable to purchase this course right now" });
  }
});

// get purchased courses

router.get("/purchasedCourses", authenticateJwt, async (req, res) => {
  const currentUserId = jwt.verify(
    req.headers.authorization.split(" ")[1],
    SECRET,
    (err, user) => {
      if (err) return;
      return user.userId;
    }
  );
  const user = await User.findById(currentUserId);
  const allCourses = await Course.find({});
  if (user) {
    let purchasedCourses = [];
    allCourses.map((c) => {
      if (user.purchasedCourses.includes(c._id)) {
        purchasedCourses.push(c);
      }
    });
    res.json({ purchasedCourses });
  } else {
    res.status(404).json({ msg: "unable to get purchased courses right now" });
  }
});

module.exports = router;
