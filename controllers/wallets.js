'use strict';
const Api = require("../definitions/Api");
require('console-stamp')(console, {
    format: ':date(dd/mm/yyyy HH:MM:ss.l).yellow :label(7).white '
});

exports.listaddressgroupings = async (req, res) => {

    let response = {}, invoke, dataString, resp;

    try{

        dataString = `{"jsonrpc":"1.0","id":"curltest","method":"listaddressgroupings","params":[]}`;

        invoke = Api.getResource();
        resp = await invoke.post("",dataString);
        
        response.data = (resp.status == 200) ? resp.data : {};
        response.success = true;
        console.log(JSON.stringify(response));
        res.json(response);

    }catch(error){
        response = {success: false, message: 'Error: '+ error.message};
        console.log('RES: ', response);
        res.status(500).json(response);
    }
}

exports.listlabels = async (req, res) => {

    let response = {}, invoke, dataString, resp, {transaction} = req.body;

    try{

        if(transaction.length > 0){
            dataString = `{"jsonrpc":"1.0","id":"curltest","method":"listlabels","params":["${transaction}"]}`;
        }else{
            dataString = `{"jsonrpc":"1.0","id":"curltest","method":"listlabels","params":[]}`;
        }

        invoke = Api.getResource();
        resp = await invoke.post("",dataString);
        
        response.data = (resp.status == 200) ? resp.data : {};
        response.success = true;
        console.log(JSON.stringify(response));
        res.json(response);

    }catch(error){
        response = {success: false, message: 'Error: '+ error.message};
        console.log('RES: ', response);
        res.status(500).json(response);
    }
}