const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "josh",
  host: "localhost",
  port: 5432,
  database: "beer"
});

module.exports = pool;
