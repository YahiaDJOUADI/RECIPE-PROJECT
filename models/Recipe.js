const mongoose = require("mongoose");

const recipeModel = {
  name: { type: String },
  category: { type: String },
  image: { type: String },
  grade: { type: Number, min: 1, max: 5 },
  description: { type: String },
};

module.exports = mongoose.model("Recipe", recipeModel);
