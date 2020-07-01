const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Add mongoose schema to access MongoDB in an object oriented way
let Comment = new Schema({
<<<<<<< HEAD
    comment_name: {
        type: String
    },
    comment_description: {
=======
    comment_name1: {
        type: String
    },
    comment_description1: {
>>>>>>> ea8998c00aa16cc83ffc2ad6818ec1531285f336
        type: String
    },
    comment_name2: {
        type: String
    },
    comment_description2: {
        type: String
<<<<<<< HEAD
=======
    },
    comment_name3: {
        type: String
    },
    comment_description3: {
        type: String
    },
    comment_name4: {
        type: String
    },
    comment_description4: {
        type: String
    },
    comment_name5: {
        type: String
    },
    comment_description5: {
        type: String
>>>>>>> ea8998c00aa16cc83ffc2ad6818ec1531285f336
    }


});

module.exports = mongoose.model('Comment', Comment);