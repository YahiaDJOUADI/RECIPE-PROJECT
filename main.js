const express = require('express');
const app = express();
const mongoose = require('mongoose');
const landingRoute = require('./routes/landingRoute')
const addRecipeRoute = require('./routes/addRecipeRoute')
const recipesRoute = require("./routes/recipesRoutes")
app.use("/public",express.static('public'));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(landingRoute)
app.use(addRecipeRoute)
app.use(recipesRoute)

mongoose.connect('mongodb://localhost:27017/recipeApp')





app.listen(3000,()=>{console.log('started server on http://localhost:3000')})