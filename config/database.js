'use strict';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // poolSize: 10,
    // useFindAndModify: false,
    dbName: process.env.DATABASE_NAME
};

const strConnection = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/`;

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(strConnection, options).then(connection => {
            this.connection = connection;
            console.info("database.js | authenticate() | [x] database connection is established.");
            mongoose.set('debug', true);
        }).catch( err => { 
            console.error("database.js | authenticate() | [ ] mongoose is not connected:", err);
        })
    }
}