const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

// User Registration
router.post("/register", (req, res) => {
  // i only need 2 3 acc thanks
  return res.status(404).json({ message: "admin only please " });

  const { username, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      // Create a new user with hashed password
      const newUser = new User({ username, password: hashedPassword });

      // Save the user to the database
      newUser
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered successfully" });
        })
        .catch((err) => {
          console.error("Error registering user:", err);
          res.status(500).json({ error: "Internal server error" });
        });
    }
  });
});

// User Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        // User not found
        res.status(404).json({ error: "User not found" });
      } else {
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            res.status(500).json({ error: "Internal server error" });
          } else if (result) {
            // Passwords match, generate JWT token
            const token = jwt.sign(
              { userId: user._id, username: user.username },
              process.env.JWT_SECRET,
              { expiresIn: "1h" }
            );
            res.status(200).json({ token });
          } else {
            // Passwords don't match
            res.status(401).json({ error: "Invalid credentials" });
          }
        });
      }
    })
    .catch((err) => {
      console.error("Error logging in:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
