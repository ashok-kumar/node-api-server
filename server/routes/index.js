import express from 'express';
import cities from './cities';
import home from './home';

const Router = express.Router();

// Add all API endpoints here
Router.use('/cities', cities);

/**
 * Home page : can send HTML to describe APIs, 
 * as of now just returnting status  
 * */
Router.get('/', home)

// Search page 
// Pdp page

export default Router;