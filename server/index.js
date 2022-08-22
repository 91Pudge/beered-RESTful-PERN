const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");

//middleware;
app.express(express.json);
app.use(cors());

//post

// get
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//getall
//put(update)
//delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
