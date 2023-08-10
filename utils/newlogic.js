const getGoldCountries = require('../utils/available_locations/gold/gold-2');
const GoldCountries = JSON.parse(getGoldCountries());

const getSilverCountries = require('../utils/available_locations/silver/silver-2');
const SilverCountries = JSON.parse(getSilverCountries());

const getIndianGoldCities = require('../utils/available_locations/gold/gold-1');
const IndianGoldCities = JSON.parse(getIndianGoldCities());

const getIndianSilverCities = require('../utils/available_locations/silver/silver-1')
const IndianSilverCities = JSON.parse(getIndianSilverCities());

const goldScraper = require('../utils/metal_rates/gold/gold-1'); 



const nisabGold = 85.0;
const nisabSilver = 595.0;
const zakatRate = 0.025;

function isCountrySupported(location, countries) {
    return countries.some(countryData => location === Object.entries(countryData)[1][1]);
}

function isCitySupported(location, cities) {
    return cities.includes(location);
}

function getZakatInGrams(amount, nisab) {
    if (amount >= nisab) {
        return amount * zakatRate;
    }
    return 0;
}

function calculateZakat(gold, silver, otherAssets, savings, liabilities, location) {
    if (!isCountrySupported(location, GoldCountries) &&
        !isCountrySupported(location, SilverCountries) &&
        !isCitySupported(location, IndianGoldCities) &&
        !isCitySupported(location, IndianSilverCities)) {
        console.log("Sorry, Zakat calculation is not supported for your location at the moment.");
        return;
    }

    const totalAssets = gold + silver + otherAssets + savings;
    const netAssets = totalAssets - liabilities;

    // Note: Assuming a static price per gram for gold and silver.
    // Update this when prices are fetched dynamically.
    const goldPricePerGram = 4500.0; // Update for dynamic prices.
    const silverPricePerGram = 70.0; // Update for dynamic prices.

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

    const place = 'Delhi';

    goldScraper.getGoldData(place)
        .then(goldDataArray => {
            console.log(goldDataArray);
        })
        .catch(error => {
            console.error('Error12333:', error);
        });



    const zakatOnGoldCurrency = getZakatInGrams(gold, nisabGold) * goldPricePerGram;
    const zakatOnSilverCurrency = getZakatInGrams(silver, nisabSilver) * silverPricePerGram;
    const zakatOnSavingsCurrency = savings * zakatRate;

    const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;

    if (totalZakatCurrency > 0) {
        console.log(`You must pay Zakat: ${totalZakatCurrency} in your location's currency`);
    } else {
        console.log("You don't have to pay Zakat");
    }
}

// Example usage
calculateZakat(100, 500, 2000, 3000, 500, "Delhi");
