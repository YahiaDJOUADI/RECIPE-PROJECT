const express = require('express');
const router = express.Router();
const addRecipeController = require('../controllers/addRecipeController');
const recipesController = require('../controllers/recipesController')

router.get('/add', addRecipeController.showAddRecipeForm);
router.post('/add', addRecipeController.addRecipe);
router.get('/list', addRecipeController.showRecipeList);
router.get("/recipe/:id", recipesController.viewRecipe);

module.exports = router;
