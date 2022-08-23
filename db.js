const Pool = require("pg").Pool;

const pool = new Pool({
  user: "josh",
  host: "localhost",
  port: 5432,
  database: "beer"
});

module.exports = pool;
