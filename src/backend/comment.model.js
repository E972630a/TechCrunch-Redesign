const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Add mongoose schema to access MongoDB in an object oriented way
let Comment = new Schema({
    comment_name: {
        type: String
    },
    comment_description: {
        type: String
    },
    comment_name2: {
        type: String
    },
    comment_description2: {
        type: String
    }


});

module.exports = mongoose.model('Comment', Comment);