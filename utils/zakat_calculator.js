const getIndianGoldCities = require('../utils/available_locations/gold/city-list');
const IndianGoldCities = JSON.parse(getIndianGoldCities());

const getGoldCountries = require('../utils/available_locations/gold/country-list');
const GoldCountries = JSON.parse(getGoldCountries());

const getIndianSilverCities = require('../utils/available_locations/silver/city-list')
const IndianSilverCities = JSON.parse(getIndianSilverCities());

const getSilverCountries = require('../utils/available_locations/silver/country-list');
const SilverCountries = JSON.parse(getSilverCountries());

const NISAB_GOLD = 85.0;
const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;

function isCountrySupported(location, countries)
{
    return countries.some(countryData => location === Object.entries(countryData)[1][1]);
}

function isCitySupported(location, cities)
{
    return cities.includes(location);
}

function getZakatInGrams(amount, nisab)
{
    if (amount >= nisab)
    {
        return amount * ZAKAT_RATE;
    }
    return 0;
}

function calculateZakat(gold, silver, otherAssets, savings, liabilities, location)
{
    if (!isCountrySupported(location, GoldCountries) &&
        !isCountrySupported(location, SilverCountries) &&
        !isCitySupported(location, IndianGoldCities) &&
        !isCitySupported(location, IndianSilverCities))
    {
        console.log("Sorry, Zakat calculation is not supported for your location at the moment.");
        return;
    }

    const totalAssets = gold + silver + otherAssets + savings;
    const netAssets = totalAssets - liabilities;

    // Note: Assuming a static price per gram for gold and silver.
    // Update this when prices are fetched dynamically.
    const goldPricePerGram = 4500.0; // Update for dynamic prices.
    const silverPricePerGram = 70.0; // Update for dynamic prices.

    const zakatOnGoldCurrency = getZakatInGrams(gold, NISAB_GOLD) * goldPricePerGram;
    const zakatOnSilverCurrency = getZakatInGrams(silver, NISAB_SILVER) * silverPricePerGram;
    const zakatOnSavingsCurrency = savings * ZAKAT_RATE;

    const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;

    if (totalZakatCurrency > 0)
    {
        console.log(`You must pay Zakat: ${totalZakatCurrency} in your location's currency`);
    } else
    {
        console.log("You don't have to pay Zakat");
    }
}

// Example usage
calculateZakat(100, 500, 2000, 3000, 500, "Yemen");
