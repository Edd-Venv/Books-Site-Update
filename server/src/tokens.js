const { sign } = require("jsonwebtoken");

// Create tokens
// ----------------------------------
const createAccessToken = (userId) => {
  return sign({ userId }, "", {
    expiresIn: "14d",
  });
};

const createRefreshToken = (userId) => {
  return sign({ userId }, "", {
    expiresIn: "14d",
  });
};

// Send tokens
// ----------------------------------
const sendAccessToken = (res, req, accesstoken) => {
  res.send({
    accesstoken,
    person_name: req.body.person_name,
  });
};

const sendRefreshToken = (res, token) => {
  res.cookie("refreshtoken", token, {
    httpOnly: true,
    path: "/refresh_token",
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
};
