const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const controllers = require("./controllers");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "hbs");
app.engine(
    "hbs",
    exphbs({
        extname: "hbs",
        layoutsDir: path.join(__dirname, "views", "layouts"),
        partialsDir: path.join(__dirname, "views", "partials"),
        defaultLayout: "main",
    })
);

app.set("port", process.env.PORT || 3000);
app.use(controllers);

module.exports = app;
