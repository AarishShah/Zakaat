

// const countriesG = require('../utils/available_locations/gold/country-list.js');

// const location = 'Yemen';

// for(let i=0;i<countriesG.length;i++){
//     if(countriesG[i] === location){
//        console.log(countriesS[i].country);
        // console.log(countriesG[i].currency);
        // console.log(countriesG[i].rate);
        // const data=[countriesS[i].country,countriesS[i].currency,countriesS[i].rate];

//         break;
//     }
// }

// const IndianGoldCities = require('../utils/metal_rates/gold/json-data/indian-cities-data.json');
// const location = 'chennai';
// let cityFound = false;

// for(let i = 0; i < IndianGoldCities.length; i++) {
//     if(IndianGoldCities[i].city === location) {
//         console.log(IndianGoldCities[i]); // print the correct city's data
//         console.log(IndianGoldCities[i].rate22K);
//         cityFound = true;
//         break; // exit the loop once the city is found
//     }
// }

// if (!cityFound) {
//     console.log("not found");
// }


// const countriesS = require('../utils/metal_rates/silver/json-data/world-data.json');

// const location = 'Yemen';
// for(let i=0;i<countriesS.length;i++){
//     if(countriesS[i].country === location){
       
//         const data=[countriesS[i].country,countriesS[i].currency,countriesS[i].rate];
//         break;
//     }
// }

// const countriesG = require('../utils/metal_rates/gold/json-data/world-data.json');

// const location = 'Yemen';
// for(let i=0;i<countriesG.length;i++){
//     if(countriesD[i].country === location){
       
//         const data=[countriesG[i].country,countriesG[i].currency,countriesG[i].rate];
//         break;
//     }
// }

function getGoldCountryData(location){
    return countriesG.find(countryData => countryData.country === location)
}

const goldCountry = getGoldCountryData('Yemen');


