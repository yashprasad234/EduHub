const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.AUTH_SECRET;

const authenticateJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ msg: "authorization using jwt failed" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ msg: "no authorization header passed" });
  }
};

module.exports = authenticateJwt;
