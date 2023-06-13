const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");
const RecipeModel = require("../models/recipe");

const nodemailer = require("nodemailer");
const ContactModel = require("../models/contact");
router.get("/", (req, res) => {
  RecipeModel.find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      res.status(500).send("Error fetching recipes");
    });
});

// Assuming you're using Express.js

// GET /recipes route
router.get("/limitrecipes", (req, res) => {
  const limit = parseInt(req.query.limit) || 5; // Default limit to 5 if not provided
  const page = parseInt(req.query.page) || 1; // Default page to 1 if not provided

  // Calculate the skip value based on the page and limit
  const skip = (page - 1) * limit;

  // Query the database with the limit and skip values
  RecipeModel.find()
    .limit(limit)
    .skip(skip)
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch recipes." });
    });
});
router.get("/id/:id", (req, res) => {
  const recipeId = req.params.id;
  RecipeModel.findById(recipeId)
    .then((recipe) => {
      if (!recipe) {
        res.status(404).send("Recipe not found");
      } else {
        res.json(recipe);
      }
    })
    .catch((error) => {
      console.error("Error fetching recipe:", error);
      res.status(500).send("Error fetching recipe");
    });
});

router.get("/category/:category", (req, res) => {
  const category = req.params.category;

  RecipeModel.find({ category })
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((error) => {
      console.error("Error fetching recipes by category:", error);
      res.status(500).send("Error fetching recipes by category");
    });
});

router.post("/addrecipe", authenticateToken, (req, res) => {
  // Code for creating a new recipe
  const {
    name,
    introduction,
    description,
    prepTime,
    cookTime,
    totalTime,
    yield,
    ingredients,
    instructions,
    notes,
    category,
    images,
    nutritionFacts,
    tags,
    source,
  } = req.body;

  const newRecipe = new RecipeModel({
    name,
    introduction,
    description,
    prepTime,
    cookTime,
    totalTime,
    yield,
    ingredients,
    instructions,
    notes,
    category,
    images,
    nutritionFacts,
    tags,
    source,
  });

  newRecipe
    .save()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((error) => {
      console.error("Error creating recipe:", error);
      res.status(500).send("Error creating recipe");
    });
});
// Update a recipe
router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const {
    name,
    cookingProcess,
    ingredients,
    category,
    introduction,
    description,
    prepTime,
    cookTime,
    totalTime,
    yield,
    notes,
    images,
    nutritionFacts,
    tags,
    source,
  } = req.body;

  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      id,
      {
        name,
        cookingProcess,
        ingredients,
        category,
        introduction,
        description,
        prepTime,
        cookTime,
        totalTime,
        yield,
        notes,
        images,
        nutritionFacts,
        tags,
        source,
      },
      { new: true }
    );

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ error: "Failed to update the recipe." });
  }
});
router.delete("/:id", authenticateToken, (req, res) => {
  // Code for deleting a recipe

  const recipeId = req.params.id;
  console.log(recipeId);
  RecipeModel.findByIdAndDelete(recipeId)
    .then((deletedRecipe) => {
      if (!deletedRecipe) {
        res.status(404).send("Recipe not found");
      } else {
        res.json({ message: "Recipe deleted successfully" });
      }
    })
    .catch((error) => {
      console.error("Error deleting recipe:", error);
      res.status(500).send("Error deleting recipe");
    });
});
// Define route to handle form submission
// routes.post("/contact", async (req, res) => {
//   try {
//     // Save form data to the MongoDB database
//     const { name, email, message } = req.body;
//     const contact = new Contact({ name, email, message });
//     await contact.save();

//     // Send email using Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "your-email@gmail.com",
//         pass: "your-password",
//       },
//     });

//     const mailOptions = {
//       from: "your-email@gmail.com",
//       to: "your-email@gmail.com",
//       subject: "New Contact Form Submission",
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).send("Form submitted successfully.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while submitting the form.");
//   }
// });

module.exports = router;
