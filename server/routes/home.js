import express from 'express';

const homeRouter = express.Router();

homeRouter.get('/', function(req, res){

    res.json({
        status: "ok",
        message: "API Server is up and running"
    });

});

export default homeRouter;
