//requiring our express
var express = require('express'),
//execute the contents of express
    app = express(),
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos'); //add this line

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

    app.get('/', function (req, res) {
        res.send("this is our entry point");
    });

    app.use('/api/todos', todoRoutes);


//this starts our server
app.listen(3000, function(){
    console.log("Todo API Server is running")
});
