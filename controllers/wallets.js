'use strict';
const Api = require("../helpers/Api");
require('console-stamp')(console, {
    format: ':date(dd/mm/yyyy HH:MM:ss.l).yellow :label(7).white '
});

exports.listaddressgroupings = async (data,req) => {

    let response = {}, invoke, dataString, resp;

    try{

        dataString = `{"jsonrpc":"1.0","id":"curltest","method":"listaddressgroupings","params":[]}`;

        invoke = Api.getResource();
        resp = await invoke.post("",dataString);
        
        response.data = (resp.status == 200) ? resp.data : {};
        response.success = true;
        console.log(`Method: ${req.method} | get | message: List address groupins get succesfully`);
        res.json(response);

    }catch(error){
        response = {success: false, message: 'Error: '+ error.message};
        console.log(`Method: ${req.method} | get | ${error.message}`);
        res.status(500).json(response);
    }
}

exports.listlabels = async (data, route) => {

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
        console.log(`Method: ${req.method} | get | message: List labels get succesfully`);
        res.json(response);

    }catch(error){
        response = {success: false, message: 'Error: '+ error.message};
        console.log(`Method: ${req.method} | get | ${error.message}`);
        res.status(500).json(response);
    }
}