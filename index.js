const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require("cors");
const path = require("path");
const pool = require("./db");

//middleware;
app.use(express.json());
app.use(cors());
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.post("/beer", async (req, res) => {
  try {
    const { beer_name, brewery_name, style, descriptions } = req.body;
    const newEntry = await pool.query(
      'INSERT INTO "drinks" (beer_name, brewery_name, style, descriptions) VALUES ($1, $2, $3, $4) RETURNING *',
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
    const getallEntry = await pool.query('SELECT * FROM "drinks"');
    res.json(getallEntry.rows);
  } catch (error) {
    console.log(error);
  }
});

//get by id
app.get("/beer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getEntry = await pool.query(
      'SELECT * FROM "drinks" WHERE review_id = $1',
      [id]
    );
    res.json(getEntry.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

app.put("/beer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { beer_name, brewery_name, style, descriptions } = req.body;
    await pool.query(
      'UPDATE "drinks" SET beer_name = $1, brewery_name = $2, style = $3, descriptions = $4 WHERE review_id = $5',
      [beer_name, brewery_name, style, descriptions, id]
    );
    res.json("t'was updated");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/beer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM "drinks" WHERE review_id = $1', [id]);
    res.json("t'was deleted");
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

console.log(path.join(__dirname));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
