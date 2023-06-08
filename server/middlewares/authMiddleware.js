const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware function to authenticate requests
const authenticate = (req, res, next) => {
  // Get the authorization header from the request
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // Extract the token from the authorization header
    const token = authHeader.split(" ")[1];

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        // Invalid token or token has expired
        return res.status(403).json({ error: "Unauthorized" });
      }

      // Token is valid, attach the user object to the request
      req.user = user;
      next();
    });
  } else {
    // No authorization header found
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticate;
