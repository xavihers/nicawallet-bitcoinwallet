const express = require("express");
const app = express();
const wallets = require("./controllers/wallets");

app.use(express.json());

app.get('/nicawallet/listwalletdir', wallets.listwalletdir);

// set port
app.listen(process.env.PORT, function () {
    console.log('Node app is running on port ' + process.env.PORT);
});

module.exports = app;
