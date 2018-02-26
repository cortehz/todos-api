//require mongoose
var mongoose = require('mongoose');

mongoose.set('debug', true);

//connect to our database server
mongoose.connect('mongodb://localhost/todo-api');

//make promise library available
mongoose.Promise = Promise;

//requiring the todo.js file and exporting it
module.exports.Todo = require("./todo");
