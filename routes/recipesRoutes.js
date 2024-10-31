const express = require('express');
const router = express.Router();
const addRecipeController = require('../controllers/addRecipeController');

router.get('/add', addRecipeController.showAddRecipeForm);
router.post('/add', addRecipeController.addRecipe);
router.get('/list', addRecipeController.showRecipeList);

module.exports = router;
