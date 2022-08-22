const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");
const pool = require("./db");

//middleware;
app.use(express.json());
app.use(cors());

//post
app.post("/beer", async (req, res) => {
  try {
    const { beer_name, brewery_name, style, descriptions } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO drinks (beer_name, brewery_name, style, descriptions) VALUES ($1, $2, $3, $4) RETURNING *",
      [beer_name, brewery_name, style, descriptions]
    );
    res.json(newEntry.rows[0]);
  } catch (error) {
    console.log(error);
  }
});
//getall

app.get("/beer", async (req, res) => {
  try {
    // const { beer_name, brewery_name, style, descriptions } = req.body;
    const getallEntry = await pool.query("SELECT * FROM drinks");
    res.json(getallEntry.rows);
  } catch (error) {
    console.log(error);
  }
});
app.get("/beer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getEntry = await pool.query(
      "SELECT * FROM drinks WHERE review_id = $1",
      [id]
    );

    res.json(getEntry.rows[0]);
  } catch (error) {
    console.log(error);
  }
});
//put(update)
app.put;
//delete
app.delete;

app.listen(port, () => {
  console.log(` server listening on port ${port}`);
});
