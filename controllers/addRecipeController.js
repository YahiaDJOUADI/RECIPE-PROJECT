const Recipe = require('../models/Recipe');

exports.showAddRecipeForm = (req, res) => {
    res.render('add-recipe');
};

exports.addRecipe = async (req, res) => {
    const { name, category, image, grade, description } = req.body;

    const newRecipe = new Recipe({
        name,
        category,
        image,
        grade: Number(grade),
        description,
    });

    await newRecipe.save();
    res.redirect('list');
};

exports.showRecipeList = async (req, res) => {
    const recipes = await Recipe.find();
    res.render('list', { recipes });
};
