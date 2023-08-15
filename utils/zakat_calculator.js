const IndianGoldCities = require('../utils/metal_rates/gold/json-data/indian-cities-data.json');

// const getGoldCountries = require('../utils/available_locations/gold/country-list');
// const GoldCountries = JSON.parse(getGoldCountries());

const getIndianSilverCities = require('../utils/metal_rates/silver/json-data/indian-cities-data.json');


// const getSilverCountries = require('../utils/available_locations/silver/country-list');
// const SilverCountries = JSON.parse(getSilverCountries());

const countriesS = require('../utils/metal_rates/silver/json-data/world-data.json');

const countriesG = require('../utils/metal_rates/gold/json-data/world-data.json');


const { isCitySupportedGold, isCountrySupportedGold } = require('../utils/available_locations/gold/is-available.js');

const { isCitySupportedSilver, isCountrySupportedSilver } = require('../utils/available_locations/silver/is-available.js');

const NISAB_GOLD = 85.0;
const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;


function getZakatInGrams(amount, nisab) {
    if (amount >= nisab) {
        return amount * ZAKAT_RATE;
    }
    return 0;
}
let goldCityData = [];
let silverCityData = [];
let goldPricePerGram = 0;
let silverPricePerGram = 0;
function calculateZakat(gold, silver, savings, location, purity) {
    if (!isCountrySupportedGold(location) &&
        !isCountrySupportedSilver(location) &&
        !isCitySupportedGold(location) &&
        !isCitySupportedSilver(location)) {
        console.log("Sorry, Zakat calculation is not supported for your location at the moment.");

        return;

    }
    //     console.log(isCitySupportedGold(location));
    // console.log(isCitySupportedSilver(location));
    // console.log(isCountrySupportedSilver(location));
    // console.log(isCountrySupportedGold(location));

    //for indian gold cities

    for (let i = 0; i < IndianGoldCities.length; i++) {
        if (IndianGoldCities[i].city === location) {

            goldCityData = [IndianGoldCities[i].city, IndianGoldCities[i].rate22K, IndianGoldCities[i].rate24K];

            break;
        }
    }

    //for indian silver cities

    for (let i = 0; i < getIndianSilverCities.length; i++) {
        if (getIndianSilverCities[i].city === location) {

            silverCityData = [getIndianSilverCities[i].city, getIndianSilverCities[i].rate];
            break;
        }
    }
    // console.log(silverCityData[1]);



    for (let i = 0; i < countriesS.length; i++) {
        if (countriesS[i].country === location) {

            const data = [countriesS[i].country, countriesS[i].currency, countriesS[i].rate];
            break;
        }
    }


    for (let i = 0; i < countriesG.length; i++) {
        if (countriesG[i].country === location) {

            const data = [countriesG[i].country, countriesG[i].currency, countriesG[i].rate];
            break;
        }
    }

    

    if (purity === 22) {
        goldPricePerGram = goldCityData[1];
    } else if (purity === 24) {
        goldPricePerGram = goldCityData[2];
    } else {
        console.log("Please enter the purity of gold as 22 or 24");
    }


    silverPricePerGram = silverCityData[1]


    const zakatOnGoldCurrency = getZakatInGrams(gold, NISAB_GOLD) * goldPricePerGram;
    const zakatOnSilverCurrency = getZakatInGrams(silver, NISAB_SILVER) * silverPricePerGram;
    const zakatOnSavingsCurrency = savings * ZAKAT_RATE;

    const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;


    // console.log(totalZakatCurrency);
    if (totalZakatCurrency > 0) {
        console.log(`You must pay Zakat: ${totalZakatCurrency} in your ${location} currency`);
    } else {
        console.log("You don't have to pay Zakat");
    }
}

// Example usage
calculateZakat(110000, 20000, 2000,  "CHENNAI", 25);