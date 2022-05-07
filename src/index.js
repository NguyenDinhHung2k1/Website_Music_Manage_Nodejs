const express = require("express");
const morgan = require("morgan");

const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

//HTTP loger
app.use(morgan("combined"));

//Get Path Public
app.use(express.static(path.join(__dirname,'public')));


//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
 
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/view", (req, res) => {
  res.render("view");
});

//ip: 127.0.0.1 -localhost

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
