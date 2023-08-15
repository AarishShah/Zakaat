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
// }

// Example usage
// calculateZakat(5000, 2000, 3000, "Yemen", 24);
