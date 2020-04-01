const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "0509",
  host: "18.222.115.53",
  port: 5432,
  database: "booksdb"
});
module.exports = pool;
