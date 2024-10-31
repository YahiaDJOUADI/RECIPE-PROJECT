exports.showRecipeList = async (req, res) => {
        const recipes = await Recipe.find(); 
        res.render('list', { recipes }); 
   
};

