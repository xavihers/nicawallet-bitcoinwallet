const createError = require('http-errors');
const express = require("express");
const app = express();
const walletRouter = require('./routes/wallet');

app.use(express.json());

//Rounting files
app.use('/', walletRouter);

//catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// set port
app.listen(process.env.PORT, function () {
    console.log('Node app is running on port ' + process.env.PORT);
});

module.exports = app;
