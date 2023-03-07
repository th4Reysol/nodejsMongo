const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    English: {
        type: String,
        required: true
    },

    Japanese: {
        type: String,
    },

    Note: {
        type: String,
    },
});

module.exports = mongoose.model("wordtables", WordSchema);