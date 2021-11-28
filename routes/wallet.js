'use strict';
const express = require('express');
const router = express.Router();
const event = require('../middlewares/event')

const { listaddressgroupings, listlabels } = require("../controllers/wallets");

router.use(event);
        
router.get('/bitcoin/wallet/hc', (req,res)=> {
    res.send("Ok");
});

router.post('/bitcoin/wallet/listaddressgroupings', (req,res) => {
    const { body, method} = req;
    listaddressgroupings(body, method);
});

router.post('/bitcoin/wallet/listlabels', (req,res) => {
    const { body, method} = req;
    listlabels(body, method);
});

module.exports = router;
