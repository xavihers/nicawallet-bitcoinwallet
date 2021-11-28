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
const Os = require('os');
const moment = require('moment');

//Connecting to mongodb
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// app.use([error404,error500]);

//set port
app.listen(process.env.PORT, function(){
    console.log('==================== HTTP =======================');
	console.log('PID         : ' + process.pid);
	console.log('Node.js     : ' + process.version);
	console.log('OS          : ' + Os.platform() + ' ' + Os.release());
	console.log('====================================================');
	console.log('Date        : ' + moment().utc().format('yyyy-MM-DD HH:mm:ss'));
    console.log('Node app is running on port: ' + process.env.PORT);
	console.log('====================================================\n');
    
});

module.exports = app;
