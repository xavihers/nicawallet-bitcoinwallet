'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    typeEvent = new Schema({
        _id: { type:String, required: true},
        name: { type:String, required: true},
        description: String,
        created: { type: Date, default: Date.now }
    });
module.exports = typeEvent;