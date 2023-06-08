const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  cookingProcess: {
    type: String,
  },
  ingredients: {
    type: [ingredientSchema],
  },
  category: {
    type: String,
  },
  introduction: {
    type: String,
  },
  description: {
    type: String,
  },
  prepTime: {
    type: String,
  },
  cookTime: {
    type: String,
  },
  totalTime: {
    type: String,
  },
  yield: {
    type: String,
  },
  notes: {
    type: String,
  },
  images: {
    type: [String],
  },
  nutritionFacts: {
    servings: {
      type: String,
    },
    calories: {
      type: Number,
    },
    totalFat: {
      type: String,
    },
    saturatedFat: {
      type: String,
    },
    transFat: {
      type: String,
    },
    cholesterol: {
      type: String,
    },
    sodium: {
      type: String,
    },
    totalCarbohydrate: {
      type: String,
    },
    dietaryFiber: {
      type: String,
    },
    sugars: {
      type: String,
    },
    protein: {
      type: String,
    },
    vitaminD: {
      type: String,
    },
    calcium: {
      type: String,
    },
    iron: {
      type: String,
    },
    potassium: {
      type: String,
    },
  },
  tags: {
    type: [String],
  },
  source: {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
