'use strict';
const compression = require('compression')
const express = require("express");
const app = express();
const { readdirSync } = require("fs");
const db = require('./config/database');
// const error404 = require('./middlewares/404');
// const error500 = require('./middlewares/500');
require('console-stamp')(console, {
    format: ':date(dd/mm/yyyy HH:MM:ss.l).yellow :label(7).white '
});

//Connecting to mongodb
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// app.use([error404,error500]);

//set port
app.listen(process.env.PORT, function(){
    console.info('Node app is running on port ' + process.env.PORT);
});

module.exports = app;
