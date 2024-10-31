const Recipe = require("../models/Recipe");

exports.showRecipeList = async (req, res) => {
        const recipes = await Recipe.find(); 
        res.render('list', { recipes }); 
   
};
exports.viewRecipe = async(req , res)=>{
    const id = req.params.id;
    const recipe = await Recipe.findById(id);
    res.render("recipe-view",{
        recipe
    })
}
