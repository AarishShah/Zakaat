const getIndianSilverCities = require('../utils/metal_rates/silver/json-data/indian-cities-data.json');
const location = 'CHENNAI';
for(let i = 0; i < getIndianSilverCities.length; i++) {
    if(getIndianSilverCities[i].city === location) {
        ;
         const silverCityData = [getIndianSilverCities[i].city, getIndianSilverCities[i].rate];
         console.log(silverCityData[1]);
        break; 
    }
}


