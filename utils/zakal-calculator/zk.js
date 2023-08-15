const countriesS = require('../metal_rates/silver/json-data/world-data.json');
const countriesG = require('../metal_rates/gold/json-data/world-data.json');

const { isCitySupportedGold, isCountrySupportedGold } = require('../available_locations/gold/is-available.js');
const { isCitySupportedSilver, isCountrySupportedSilver } = require('../available_locations/silver/is-available.js');

const NISAB_GOLD = 85.0;
const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;



function getZakatInGrams(amount, nisab)
{
    if (amount >= nisab)
    {
        return amount * ZAKAT_RATE;
    }
    return 0;
}

function gold(location, purity, weight) {
    // Define the price function for gold based on location and purity
    function price(location, purity) {
        // Define a sample price map for gold based on location and purity
        // Note: These are sample prices and may not reflect the actual market rates
        const priceMap = {
            'city': {
                22: 4500, // price per gram for 22k gold in city
                24: 5000  // price per gram for 24k gold in city
            },
            'country': {
                18: 4000, // price per gram for 18k gold in country
                22: 4200, // price per gram for 22k gold in country
                24: 4800  // price per gram for 24k gold in country
            }
        };

        return priceMap[location][purity];
    }

    // Check if location is supported
    if (location !== 'city' && location !== 'country') {
        throw new Error('Unsupported location');
    }

    // Check if purity is supported based on location
    if (location === 'city' && (purity !== 22 && purity !== 24)) {
        throw new Error('Unsupported purity for city. Supported values are 22 and 24.');
    } else if (location === 'country' && (purity !== 18 && purity !== 22 && purity !== 24)) {
        throw new Error('Unsupported purity for country. Supported values are 18, 22, and 24.');
    }

    // Calculate the cost of gold
    const cost = weight * price(location, purity);
    return cost;
}

// Sample usage:
// console.log(gold('city', 22, 10)); // Expected output: 45000
// console.log(gold('country', 18, 10)); // Expected output: 40000





// function calculateZakat(gold, silver, savings, location, purity)
// {
//     if (isCitySupportedGold(location))
//     {
//         console.log("Data is available for gold city");
//     } else if (isCitySupportedSilver(location))
//     {
//         console.log("Data is available for silver city");
//     } else if (isCountrySupportedSilver(location))
//     {
//         console.log("Data is available for silver country");
//     } else if (isCountrySupportedGold(location))
//     {
//         console.log("Data is available for gold country");
//     }

//     {
//         console.log(isCitySupportedGold(location));
//         console.log(isCitySupportedSilver(location));
//         console.log(isCountrySupportedSilver(location));
//         console.log(isCountrySupportedGold(location));
//     }

    // const totalAssets = gold + silver + otherAssets + savings;
    // const netAssets = totalAssets - liabilities;

    // // Note: Assuming a static price per gram for gold and silver.
    // // Update this when prices are fetched dynamically.
    // const goldPricePerGram = 4500.0; // Update for dynamic prices.
    // const silverPricePerGram = 70.0; // Update for dynamic prices.

    // const zakatOnGoldCurrency = getZakatInGrams(gold, NISAB_GOLD) * goldPricePerGram;
    // const zakatOnSilverCurrency = getZakatInGrams(silver, NISAB_SILVER) * silverPricePerGram;
    // const zakatOnSavingsCurrency = savings * ZAKAT_RATE;

    // const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;

    // if (totalZakatCurrency > 0)
    // {
    //     console.log(`You must pay Zakat: ${totalZakatCurrency} in your location's currency`);
    // } else
    // {
    //     console.log("You don't have to pay Zakat");
    // }
}

// Example usage
// calculateZakat(5000, 2000, 3000, "Yemen", 24);
