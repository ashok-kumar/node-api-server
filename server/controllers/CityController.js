import CityModel from '../models/CityModel';

export default {

    getCities: (req, res) => {

        // Do business logic here
        return CityModel.getCities();
    }
} 

