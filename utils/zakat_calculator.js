const IndianGoldCities = require('../utils/metal_rates/gold/json-data/indian-cities-data.json');
const GoldCountries = require('../utils/available_locations/gold/country-list');
const IndianSilverCities = require('../utils/metal_rates/silver/json-data/indian-cities-data.json');
const SilverCountries = require('../utils/available_locations/silver/country-list');

const { isCitySupportedGold, isCountrySupportedGold } = require('../utils/available_locations/gold/is-available.js');
const { isCitySupportedSilver, isCountrySupportedSilver } = require('../utils/available_locations/silver/is-available.js');

const NISAB_GOLD = 85.0;
const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;

function getZakatInGrams(amount, nisab) {
    return amount >= nisab ? amount * ZAKAT_RATE : 0;
}

function getGoldData(location) {
    return IndianGoldCities.find(cityData => cityData.city === location);
}

function getSilverData(location) {
    return IndianSilverCities.find(cityData => cityData.city === location);
}

function calculateZakat(gold, silver, savings, location, purity) {
    if (!isCountrySupportedGold(location) &&
        !isCountrySupportedSilver(location) &&
        !isCitySupportedGold(location) &&
        !isCitySupportedSilver(location)) 
    {
        return "Sorry, Zakat calculation is not supported for your location at the moment.";
    }

    const goldData = getGoldData(location);
    const silverData = getSilverData(location);

    if (!goldData || (purity !== 22 && purity !== 24)) {
        return "Please enter the purity of gold as 22 or 24";
    }

    const goldPricePerGram = purity === 22 ? goldData.rate22K : goldData.rate24K;
    const silverPricePerGram = silverData ? silverData.rate : 0;

    const zakatOnGoldCurrency = getZakatInGrams(gold, NISAB_GOLD) * goldPricePerGram;
    const zakatOnSilverCurrency = getZakatInGrams(silver, NISAB_SILVER) * silverPricePerGram;
    const zakatOnSavingsCurrency = savings * ZAKAT_RATE;

    const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;

    return totalZakatCurrency > 0 
        ? `You must pay Zakat: ${totalZakatCurrency} in your ${location} currency`
        : "You don't have to pay Zakat";
}

// Example usage
console.log(calculateZakat(0, 0, 3000, "CHENNAI", 24));
