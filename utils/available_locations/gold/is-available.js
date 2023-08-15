const GoldCityList = require('./city-list');
const GoldCityListObj = JSON.parse(GoldCityList());

const GoldCountryList = require('./country-list');
const GoldCountryListObj = JSON.parse(GoldCountryList());

function isCitySupportedGold(location) {
    for (let i = 0; i < GoldCityListObj.length; i++) {
        if (GoldCityListObj[i] === location) {
            // console.log(GoldCityListObj[i]); // for debugging
            return true;
        }
    }
    return false; // Explicitly return false if city is not found
}

function isCountrySupportedGold(location) {
    for (let i = 0; i < GoldCountryListObj.length; i++) {
        if (GoldCountryListObj[i] === location) {
            // console.log(GoldCountryListObj[i]); // for debugging (corrected the reference)
            return true;
        }
    }
    return false; // Explicitly return false if country is not found
}

module.exports = {
    isCitySupportedGold,
    isCountrySupportedGold
};
