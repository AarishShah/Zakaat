const silverCityList= require('./city-list');
const silverCityListObj = JSON.parse(silverCityList());

const silverCountryList= require('./country-list');
const silverCountryListObj = JSON.parse(silverCountryList());


function isCitySupportedSilver(location) {
    for (let i = 0; i < silverCityListObj.length; i++) {
        if (silverCityListObj[i] === location) {
            // console.log(silverCityListObj[i]); // for debugging
            return true;
        }
    }
    return false; // Explicitly return false if city is not found
}


function isCountrySupportedSilver(location) {
    for (let i = 0; i < silverCountryListObj.length; i++) {
        if (silverCountryListObj[i] === location) {
            // console.log(silverCountryListObj[i]); // for debugging (corrected the reference)
            return true;
        }
    }
    return false; // Explicitly return false if country is not found
}

  module.exports = {
    isCitySupportedSilver,
    isCountrySupportedSilver
};
