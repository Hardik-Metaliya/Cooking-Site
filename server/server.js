const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middlewares
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Middleware to authenticate the token
// function authenticateToken(req, res, next) {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (token == null) return res.sendStatus(401);
//
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }
//
// Routes
const recipeRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);
app.use("/", contactRoutes);
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
