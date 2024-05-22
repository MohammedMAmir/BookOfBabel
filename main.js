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
    res.render('atlas');
});

app.get('/champions', function(req, res){
    res.render('champions');
})

//-----TODO:-----
//custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http:localhost:' + app.get('port')+
    '; press Ctrl-C to terminate.');
}); 



