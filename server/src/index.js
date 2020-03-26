require("dotenv/config");
const express = require("express");
const uuid_generate = require("uuid");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const pool = require("../database-conection/db.js");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken
} = require("./tokens.js");

const { isAuth } = require("./isAuth.js");

// 1. Register a user
// 2. Login a user
// 3. Logout a user
// 4. Setup a protected route
// 5. Get a new accesstoken with a refresh token

const server = express();

// Use express middleware for easier cookie handling
server.use(cookieParser());

server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

// Needed to be able to read body data
server.use(express.json()); // to support JSON-encoded bodies
server.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// 1. Register a user
server.post("/register", async (req, res) => {
  const { person_name, password } = req.body;

  try {
    // 1. Check if the user exist
    const checkDB = await pool.query(
      `SELECT person_name FROM person WHERE person_name = '${person_name}'`
    );
    const doesUserExist = checkDB.rows[0];

    if (doesUserExist !== undefined)
      throw new Error(`User-name ${person_name} is taken.`);

    // 2. If not user exist already, hash the password
    const hashedPassword = await hash(password, 10);

    // 3. Insert the user in database
    await pool.query(
      "INSERT INTO person (id_uid, person_name, password) VALUES($1, $2, $3)",
      [uuid_generate.v4(), person_name, hashedPassword]
    );
    res.send({ message: "User Created" });
  } catch (err) {
    res.send({
      error: `${err.message}`
    });
  }
});

// 2. Login a user
server.post("/login", async (req, res) => {
  const { person_name, password } = req.body;

  try {
    // 1. Check if the user exists
    const checkDB = await pool.query(
      `SELECT * from person where person_name = '${person_name}'`
    );
    const doesUserExist = checkDB.rows[0];

    if (!doesUserExist) throw new Error(`${person_name} is an invalid user.`);

    // 2. Compare crypted password and see if it checks out. Send error if not
    const user = doesUserExist;

    const valid = await compare(password, user.password);
    if (!valid) throw new Error("Password not correct");

    // 3. Create Refresh- and Accesstoken
    const accesstoken = createAccessToken(user.id_uid);
    const refreshtoken = createRefreshToken(user.id_uid);

    // 4. Store Refreshtoken with user in db
    await pool.query(
      `UPDATE person SET refreshtoken = '${refreshtoken}' WHERE id_uid = '${user.id_uid}'`
    );

    // 5. Send token. Refreshtoken as a cookie and accesstoken as a regular response
    sendRefreshToken(res, refreshtoken);
    sendAccessToken(res, req, accesstoken);
  } catch (err) {
    res.send({
      error: `${err.message}`
    });
  }
});

// 3. Logout a user
server.post("/logout", async (_req, res) => {
  res.clearCookie("refreshtoken", { path: "/refresh_token" });

  // Logic here for to also remove refreshtoken from dataBase
  const { person_name } = _req.body;
  await pool.query(
    `UPDATE person SET refreshtoken = '' WHERE person_name = '${person_name}'`
  );

  return res.send({
    message: "Logged out"
  });
});

// 4. Protected route
server.post("/protected", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      res.send({
        data: "This is protected data from server."
      });
    }
  } catch (err) {
    res.send({
      error: `${err.message}`
    });
  }
});

// 5. Get a new access token with a refresh token
server.post("/refresh_token", async (req, res) => {
  const token = req.cookies.refreshtoken;
  // If we don't have a token in our request ask to relogin I think
  if (!token) return res.send({ accesstoken: "" });
  // We have a token, let's verify it!
  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return res.send({ accesstoken: "" });
  }

  try {
    // token is valid, now check if user exists in dataBase
    const checkDB = await pool.query(
      `SELECT id_uid FROM person WHERE id_uid = '${payload.userId}'`
    );
    const doesUserExist = checkDB.rows[0].id_uid;
    if (!doesUserExist) throw new Error("User Doesn't Exist In DataBase");

    // user exists, check if refreshtoken exist on user in dataBase.
    const checkRefreshToken = await pool.query(
      `SELECT refreshtoken FROM person WHERE id_uid = '${payload.userId}'`
    );

    if (checkRefreshToken.rows[0].refreshtoken !== token)
      throw new Error("Tokens Don't Match");

    // token exist, create new Refresh And Accesstoken
    const id_uid = doesUserExist;
    const accesstoken = createAccessToken(id_uid);
    const refreshtoken = createRefreshToken(id_uid);

    //Update refreshtoken on user in dataBase
    await pool.query(
      `UPDATE person SET refreshtoken = '${refreshtoken}' WHERE id_uid = '${id_uid}'`
    );

    //All Checks Out send new refreshtoken and accesstoken
    sendRefreshToken(res, refreshtoken);
    return res.send({ accesstoken });
  } catch (err) {
    return res.send(err);
  }
});

//Handles saving a book and fetch the data of the user after authentication
server.post("/", async (req, res) => {
  if (req.body.book_image) {
    console.log("serverSide bookImage", req.body.book_image);
    return res.send({ data: "Book Saved" });
  } else if (req.body.person_name) {
    console.log("serverSide personName", req.body.person_name);
    return res.send({ data: "personName" });
  }
});

server.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);
