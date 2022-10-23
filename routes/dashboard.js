const router = require("express").Router();

const pool = require("../db");
const authorisation = require("../middleware/authorisation");

router.get("/", authorisation, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT u.user_name, d.review_id, d.beer_name, d.brewery_name, d.style, d.descriptions FROM users AS u LEFT JOIN drinks AS d ON u.user_id = d.user_id WHERE u.user_id = $1",
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
    const newBeer = await pool.query(
      'INSERT INTO "drinks" (user_id, beer_name, brewery_name, style, descriptions) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.user, beer_name, brewery_name, style, descriptions]
    );

    res.json(newBeer.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/beers/:id", authorisation, async (req, res) => {
  try {
    const { id } = req.params;
    const { beer_name, brewery_name, style, descriptions } = req.body;
    const updateBeer = await pool.query(
      'UPDATE "drinks" SET beer_name = $1, brewery_name = $2, style = $3, descriptions = $4 WHERE review_id = $5 AND user_id = $6 RETURNING *',
      [beer_name, brewery_name, style, descriptions, id, req.user]
    );

    if (updateBeer.rows.length === 0) {
      return res.json("This review is not yours");
    }

    res.json("Review was updated");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/dashboard/beers/:id", authorisation, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBeer = await pool.query(
      "DELETE FROM drinks WHERE review_id = $1 AND user_id = $2 RETURNING *",
      [id, req.user]
    );

    if (deleteBeer.rows.length === 0) {
      return res.json("This review is not yours");
    }

    res.json("Review was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
