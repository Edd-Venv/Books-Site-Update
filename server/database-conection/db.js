const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "050993Aurum",
  host: "booksdb.cu7acqeogeq9.us-east-2.rds.amazonaws.com",
  port: 5432,
  database: "booksdb"
});
module.exports = pool;
