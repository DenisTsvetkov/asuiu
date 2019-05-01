const express    = require('express');
const bodyParser = require('body-parser');
const expressHbs = require("express-handlebars");
const Sequelize = require('sequelize');

const app = express();


// For Handlebars
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs",
        helpers: {}
    }
))
app.set("view engine", "hbs");


app.use('/', express.static(__dirname+'/public/'));

//For BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


require(__dirname+'/routes/router')(app);




app.listen(8080, function(){
    console.log('Express server listening on port 8080');
});