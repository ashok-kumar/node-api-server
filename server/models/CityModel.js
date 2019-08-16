export default {
    getCities: (req, res) => {

        // Connect to databse 'db' connecter and get data.
        return [
            {name: 'Bangalore', key: 1},
            {name: 'Hyderabad', key: 2},
            {name: 'Chennai', key: 3}
        ];
    }
} 

