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

router.post("/beers", authorisation, async (req, res) => {
  try {
    console.log(req.body);
    const { beer_name, brewery_name, style, descriptions } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO "drinks" (user_id, beer_name, brewery_name, style, descriptions) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.user, beer_name, brewery_name, style, descriptions]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
