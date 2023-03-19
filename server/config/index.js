require("dotenv").config();
const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";
const database =
  process.env.NODE_ENV === "test"
    ? process.env.POSTGRES_DB_TEST
    : "pernstore";

const connectionString = `postgresql://postgres:postgres@postgres:5432/pernstore`;
const pool = new Pool({
  connectionString,
  /*
    SSL is not supported in development
    */
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
