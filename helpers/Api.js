const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();

const getResource = () => {
  return axios.create({
    baseURL: `http://${process.env.RPC_USER}:${process.env.RPC_PASSWORD}@127.0.0.1:8332/`,
    headers: {
      "Content-Type":   "text/plain;",
    }
  });
}

module.exports.getResource = getResource;
