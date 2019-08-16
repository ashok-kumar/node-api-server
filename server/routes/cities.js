import express from 'express';
import CityController from '../controllers/CityController';

const citiesRouter = express.Router();

citiesRouter.get('/', function(req, res){

    const cities = CityController.getCities(req, res);
    res.json(cities);

});

// citiesRouter.get('/:id', CityController.getCity);

export default citiesRouter;
