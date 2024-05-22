//-----SETUP-----
var express = require("express");
var app = express();
app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname + "/public"));
//set up handlebars view engine
var handlebars = require("express3-handlebars").create(
    {defaultLayout: 'main'}
);

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//-----VIEWS-----
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('The Book of Babel | Atlas');
});

app.get('/champions', function(req, res){
    res.type('text/plain');
    res.send('The Book of Babel | Champions of Elaria');
})

//-----TODO:-----
//custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http:localhost:' + app.get('port')+
    '; press Ctrl-C to terminate.');
}); 



