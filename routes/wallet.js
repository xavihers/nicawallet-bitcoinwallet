'use strict';
const express = require('express');
const router = express.Router();
const event = require('../middlewares/event')

const {listaddressgroupings, listlabels, listlabelsReceiveSend, welcome} = require("../controllers/wallets");

router.use(event);
        
router.get('/wallet/welcome', welcome);
router.post('/wallet/listaddressgroupings', listaddressgroupings);
router.post('/wallet/listlabels', listlabels);

module.exports = router;
