'use strict';

module.exports = (req, res, next) => {

    try{
       
        res.status(404).send({
            status: 404,
            error: `Not found`
        });
        
        next();
  
    }catch(error){
      console.error(error);
    }
  
};