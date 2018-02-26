var mongoose = require('mongoose');

//todo schema
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please fill in a name!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

//compile the schema into a model
var Todo = mongoose.model('Todo', todoSchema);

//exporting the todo model
module.export = Todo;