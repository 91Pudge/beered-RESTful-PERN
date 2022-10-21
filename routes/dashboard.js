const router = require("express").Router();

const pool = require("../db");
const authorisation = require("../middleware/authorisation");

router.get("/", authorisation, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT u.user_name, d.review_id, d.descriptions FROM users AS u LEFT JOIN drinks AS d ON u.user_id = d.user_id WHERE u.user_id = $1",
      [req.user]
    );
    res.json(user.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
});

module.exports = router;
