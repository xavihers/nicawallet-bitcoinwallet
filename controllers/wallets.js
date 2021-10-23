'use strict';
const Api = require("../helpers/Api");
// const axios = require("axios");

async function listwalletdir(req, res){

    let response = {}, invoke, dataString, headers = {}, resp;

    try{

        dataString = `{"jsonrpc":"1.0","id":"curltext","method":"listwalletdir","params":[]}`;

        invoke = Api.getResource();
        resp = await invoke.post("",dataString);
        
        response.data = (resp.status == 200) ? resp.data : {}; 
        response.success = true;
        res.json(response);

    }catch(error){
        response = {success: false, message: 'Error: '+ error.message};
        console.log('RES: ', response);
        res.status(500).json(response);
    }
}

module.exports.listwalletdir = listwalletdir;