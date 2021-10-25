const express = require('express');
const router = express.Router();
const {listaddressgroupings, listlabels, listlabelsReceiveSend} = require("../controllers/wallets");

router.post('/wallet/listaddressgroupings', listaddressgroupings);
router.post('/wallet/listlabels', listlabels);

module.exports = router;
