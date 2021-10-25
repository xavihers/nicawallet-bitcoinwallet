'use strict';

module.exports = function(app){

    (req,res,next) => {
        
        app.locals({ 
            siteTitle: "My Website's Title",
            pageTitle: "The Root Splash Page",
            author: "Cory Gross",
            description: "My app's description",
        });

        next();
    }
}