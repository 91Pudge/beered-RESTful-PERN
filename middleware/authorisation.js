const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Unauthorised");
    }
    const payload = jwt.verify(jwtToken, process.env.jwtSecert);

    req.user = payload.user;
  } catch (error) {
    console.error(error.message);
    res.status(403).json("Unauthorised");
  }
};