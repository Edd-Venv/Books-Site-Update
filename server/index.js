require("dotenv/config");
const path = require("path");
const http = require("http");
const express = require("express");
const fetch = require("node-fetch");
const uuid_generate = require("uuid");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const pool = require("./database-conection/db.js");
const { verify } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const { isAuth } = require("./src/isAuth.js");
const {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  sendAccessToken
} = require("./src/tokens.js");
const NodeCache = require("node-cache");
const Cache = new NodeCache();

const server = express();

// Use express middleware for easier cookie handling
server.use(cookieParser());

server.use(
  cors({
    origin: "https://18.222.115.53",
    credentials: true
  })
);

// Needed to be able to read body data
server.use(express.json()); // to support JSON-encoded bodies
server.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

/////////////////////////////////////////////////// API CALLS

server.post("/search", async (req, res) => {
  const searchAPI = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/search/views/search-display?q=${req.body.search_text}&api_key=2n9pws7675zn9bu39htq5gjz`;

  try {
    const exists = Cache.has(`${req.body.search_text}`);

    if (exists) {
      res.json({ data: Cache.get(`${req.body.search_text}`) });
    } else {
      const result = await (await fetch(searchAPI)).json();
      Cache.set(`${req.body.search_text}`, result, 691200);
      res.json({ data: result });
    }
  } catch (error) {
    res.json({ error: error });
  }
});

const sundayReadsAPI =
  "https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/20/titles?showCovers=true&api_key=2n9pws7675zn9bu39htq5gjz";
server.get("/sundayReads", async (req, res) => {
  try {
    const exists = Cache.has("sundayReadsData");

    if (exists) {
      res.json({ data: Cache.get("sundayReadsData") });
    } else {
      const result = await (await fetch(sundayReadsAPI)).json();
      Cache.set("sundayReadsData", result, 691200);
      res.json({ data: result });
    }
  } catch (error) {
    res.json({ error: error });
  }
});

const historyAPI =
  "https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showCovers=true&api_key=2n9pws7675zn9bu39htq5gjz";
server.get("/history", async (req, res) => {
  try {
    const exists = Cache.has("historyData");
    if (exists) {
      res.json({ data: Cache.get("historyData") });
    } else {
      const result = await (await fetch(historyAPI)).json();
      Cache.set("historyData", result, 691200);
      res.json({ data: result });
    }
  } catch (error) {
    res.json({ error: error });
  }
});

const bestSellersAPI =
  "https://api.penguinrandomhouse.com/resources/v2/title/domains/SALESINTERNATIONAL/categories/1/titles?showBestsellers=true&showCovers=true&api_key=2n9pws7675zn9bu39htq5gjz";
server.get("/bestSellers", async (req, res) => {
  try {
    const exists = Cache.has("bestSellersData");
    if (exists) {
      res.json({ data: Cache.get("bestSellersData") });
    } else {
      const result = await (await fetch(bestSellersAPI)).json();
      Cache.set("bestSellersData", result, 691200);
      res.json({ data: result });
    }
  } catch (error) {
    res.json({ error: error });
  }
});

////////////////////////////////////////////////////////////////////////////

// 1. Register a user
// 2. Login a user
// 3. Logout a user
// 4. Get a new accesstoken with a refresh token

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
      `UPDATE person SET refreshtoken = '${refreshtoken}'
       WHERE id_uid = '${user.id_uid}'`
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

// 4. Get a new access token with a refresh token
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
      `UPDATE person SET refreshtoken = '${refreshtoken}'
       WHERE id_uid = '${id_uid}'`
    );

    //All Checks Out send new refreshtoken and accesstoken
    sendRefreshToken(res, refreshtoken);
    return res.send({ accesstoken });
  } catch (err) {
    return res.send(err);
  }
});

/////////           ROUTES

//Sending Client's UserName
server.get("/userName", async (req, res, next) => {
  const userId = isAuth(req);

  if (userId !== null) {
    try {
      const exists = Cache.has(`${userId}`);

      if (exists) {
        res.json({ name: Cache.get(`${userId}`) });
      } else {
        const user = await pool.query(
          `SELECT person_name FROM person WHERE id_uid = '${userId}'`
        );

        Cache.set(`${userId}`, user.rows[0].person_name, 691200);
        res.send({ name: user.rows[0].person_name });
      }
    } catch (error) {
      res.json({ error: error });
    }
  }
});

//Saving a book after the user authentication
server.post("/", async (req, res, next) => {
  const userId = isAuth(req);
  if (userId !== null) {
    try {
      //Check If Book is Already Saved
      const checkDB = await pool.query(
        `SELECT * FROM book WHERE book_key = '${req.body.book_key}'
         AND person_id = '${userId}'`
      );

      const doesBookExist = checkDB.rows[0];
      if (doesBookExist !== undefined) return null;
      //I can put the check outside the try catch block to get the error but it will crush the app
      //res.json(`<p>${req.body.book_title} is already saved.</p>`);

      const values = [
        userId,
        req.body.book_image,
        req.body.book_key,
        req.body.book_title,
        req.body.book_author,
        req.body.book_price,
        req.body.book_currencyCode,
        req.body.book_pages
      ];
      pool.query(
        `INSERT INTO book (person_id, book_image, book_key, book_title,
          book_author,
          book_price,
          book_currencyCode,
          book_pages) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8)`,
        values,
        (q_err, q_res) => {
          if (q_err) return next(q_err);
          res.json({ message: "Book Saved" });
        }
      );
    } catch (err) {
      res.json({ error: err });
    }
  }
});

//Getting Protected data
server.get("/protected", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      const books = await pool.query(
        `SELECT * FROM book WHERE person_id = '${userId}'`
      );
      res.send({
        data: books.rows
      });
    }
  } catch (err) {
    res.json({
      error: `${err.message}`
    });
  }
});

//Delete Protected Data
server.post("/protected", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      await pool.query(
        `DELETE FROM book WHERE book_key = '${req.body.book_key}'
         AND person_id = '${userId}'`
      );

      res.json({ message: `${req.body.book_title} Deleted.` });
    }
  } catch (error) {
    res.json({ error: "Book Not Deleted." });
  }
});

/////                    SETTINGS

server.post("/settings/changePassword", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      const { new_password, old_password } = req.body;

      const checkDB = await pool.query(
        `SELECT * from person where id_uid = '${userId}'`
      );
      const user = checkDB.rows[0];

      const valid = await compare(old_password, user.password);
      if (!valid) throw new Error("Password not correct");

      const hashedPassword = await hash(new_password, 10);
      await pool.query(`UPDATE person SET password = '${hashedPassword}' 
      WHERE id_uid = '${userId}'`);
    }
    res.json({ message: "Password Changed." });
  } catch (error) {
    res.json({ error: "Password Not Changed." });
  }
});

server.post("/settings/changeName", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      await pool.query(
        `UPDATE person SET person_name = '${req.body.new_name}' 
        WHERE id_uid = '${userId}' AND person_name = '${req.body.old_name}'`
      );
    }
    res.json({ message: "User Name Updated" });
  } catch (error) {
    res.json({ error: "User Name Already Taken." });
  }
});

server.post("/deleteUser", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      await pool.query(`DELETE FROM book WHERE person_id = '${userId}'`);
      await pool.query(`DELETE FROM person WHERE id_uid = '${userId}'`);

      res.json({ message: "User Deleted." });
    }
  } catch (error) {
    res.send({ error: "User Not Deleted." });
  }
});

if (true) {
  server.use(express.static("build"));
  server.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

http.createServer(server).listen(4000);

/*server.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);
*/
