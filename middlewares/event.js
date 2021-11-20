'use strict';
const eventSchema = require('../models/events');
const mongoose = require('mongoose');

module.exports = (req, res, next) => {

    try{
       
        const newEvent = {
            type: 'call_api',
            request: {
                url: `${req.headers.host}${req.url}` || '',
                ip: req.ip || '',
                path: req.url || '',
                method: req.method || ''
            },
            geo: {},
            geolocation: {},
            device: {}
        };

        let event = mongoose.model('events', eventSchema,'events')
        let e = new event(newEvent);
        e.save(function(err){
            if (err) {
              const error = new Error("Error to save event");
              error.status = 500;
              console.error(`${err}`);
            }
            let responseText = `Event saved successfuly #${e._id}`;
            console.info(responseText);
        });
        
        next();
  
    }catch(error){
      console.log(error);
    }
  
};