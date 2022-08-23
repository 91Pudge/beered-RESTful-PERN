const Pool = require("pg").Pool;
require("dotenv").config();

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const devConfig = {
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT
// };
const pool = new Pool({
  user: "josh",
  host: "localhost",
  port: 5432,
  database: "beer"
});

// const proConfig = process.env.DATABASE_URL; //heroku addons

// const pool = new Pool({
//   connectionString:
//     process.env.NODE_ENV === "production" ? devConfig : proConfig
// });

module.exports = pool;
