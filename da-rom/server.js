
vlet express = require("express");

let bodyParser = require("body-parser");

let methodOverride = require('method-override');


let app = express();

let PORT = process.env.PORT || 8080;

app.use(methodOverride("_method"));

let db = require("./models");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("./public"));


let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

require("./controllers/burger-controllers.js")(app);

db.sequelize.sync({ force: false }).then(function() {

  app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);

  });

});

