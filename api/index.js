const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const PORT = 3000;
const adminRouter = require("./routes/admin.js");
const userRouter = require("./routes/user.js");
const MONGO_URI = process.env.MONGO_URI;
const cors = require("cors");

// Configure CORS with all origins
app.use(cors());

app.use(express.json());
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

mongoose.connect(MONGO_URI, {
  dbName: "coursera-clone",
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
