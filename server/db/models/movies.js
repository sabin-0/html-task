const mongoose = require('mongoose');

const movies = new mongoose.Schema({
    moviename : {
        type : String,
        required : true,
        unique : true
    },
    language : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    runtime : {
        type : String,
        required : true
    },
    certification : {
        type : String,
        required : true
    },
    releasedate : {
        type : String,
        required : true
    },
    aboutmovie : {
        type : String,
        required : true,
        unique : true
    }
});

module.exports = mongoose.model("movies",movies);