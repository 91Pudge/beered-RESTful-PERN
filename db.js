const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE
};
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

const proConfig = {
  connectionString: process.env.DATABASE_URL
};

module.exports = pool;
