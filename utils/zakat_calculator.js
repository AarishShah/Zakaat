const IndianGoldCities = require('../utils/metal_rates/gold/json-data/indian-cities-data.json');

const getGoldCountries = require('../utils/available_locations/gold/country-list');
const GoldCountries = JSON.parse(getGoldCountries());

const getIndianSilverCities = require('../utils/metal_rates/silver/json-data/indian-cities-data.json');


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
let goldCityData = [];
let silverCityData=[];
let goldPricePerGram = 0;
let silverPricePerGram =0;
function calculateZakat(gold, silver, otherAssets, savings, liabilities, location,purity)
{
    // if (!isCountrySupported(location, GoldCountries) &&
    //     !isCountrySupported(location, SilverCountries) &&
    //     !isCitySupported(location, IndianGoldCities) &&
    //     !isCitySupported(location, IndianSilverCities))
    // {
    //     console.log("Sorry, Zakat calculation is not supported for your location at the moment.");
    //     return;
    // }

    //for indian gold cities

    for(let i = 0; i < IndianGoldCities.length; i++) {
        if(IndianGoldCities[i].city === location) {
           
            goldCityData = [IndianGoldCities[i].city, IndianGoldCities[i].rate22K, IndianGoldCities[i].rate24K];
    
            break; 
        }
    }

    //for indian silver cities

    for(let i = 0; i < getIndianSilverCities.length; i++) {
        if(getIndianSilverCities[i].city === location) {
           
             silverCityData = [getIndianSilverCities[i].city, getIndianSilverCities[i].rate];
            break; 
        }
    }

    const totalAssets = gold + silver + otherAssets + savings;
    const netAssets = totalAssets - liabilities;

    // Note: Assuming a static price per gram for gold and silver.
    // Update this when prices are fetched dynamically.
    if(purity === 22) {
     goldPricePerGram = goldCityData[1]; // Update for dynamic prices.
    } else if(purity === 24) {
         goldPricePerGram = goldCityData[2]; // Update for dynamic prices.
    }else{
        console.log("Please enter the purity of gold as 22 or 24");
    }


    silverPricePerGram = silverCityData[1] // Update for dynamic prices.

    const zakatOnGoldCurrency = getZakatInGrams(gold, NISAB_GOLD) * goldPricePerGram;
    const zakatOnSilverCurrency = getZakatInGrams(silver, NISAB_SILVER) * silverPricePerGram;
    const zakatOnSavingsCurrency = savings * ZAKAT_RATE;

    const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;



    if (totalZakatCurrency > 0)
    {
        console.log(`You must pay Zakat: ${totalZakatCurrency} in your ${location} currency`);
    } else 
    {
        console.log("You don't have to pay Zakat");
    }
}

// Example usage
calculateZakat(100, 500, 2000, 3000, 500, "CHENNAI",22);
