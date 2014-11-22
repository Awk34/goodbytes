'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: String,
    info: String,
    ingredients: [],
    ratings: [],
    rating: number,
    directions: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
