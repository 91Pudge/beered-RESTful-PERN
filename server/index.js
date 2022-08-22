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
app.get;
// get
app.get("/beer", (req, res) => {
  res.send("Hello World!");
});
//put(update)
app.put;
//delete
app.delete;

app.listen(port, () => {
  console.log(` server listening on port ${port}`);
});
