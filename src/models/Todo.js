const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    todo: {
        type:  String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('todos', Todo);