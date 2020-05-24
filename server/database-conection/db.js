const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "",
  port: 0,
  database: "",
});
module.exports = pool;
