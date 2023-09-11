const goldCalculator = require('./metal-calculator/gold-calculator');
const silverCalculator = require('./metal-calculator/silver-calculator');

// Constants
const NISAB_GOLD = 85.0;
const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;

// Gold
const locationForGold = 'chennai'; // fetch from user
const purity = 24; // fetch from user
const weightOfGold = 1000; // fetch from user

// Silver
const locationForSilver = 'chennai'; // fetch from user
const weightOfSilver = 1000; // fetch from user

// Savings
const savings = 1000; // fetch from user
const savingsLocation = 'chennai'; // fetch from user

// Nisab for savings
const priceOfNisabSavingsGold = goldCalculator(savingsLocation, 24, NISAB_GOLD).cost; // convert to usd
const priceOfNisabSavingsSilver = silverCalculator(savingsLocation, NISAB_SILVER).cost; // convert to usd

// Nisab for metals
const priceOfNisabGold = goldCalculator(locationForGold, 24, NISAB_GOLD).cost; // for the purest value // convert to usd
const priceOfNisabSilver = silverCalculator(locationForSilver, NISAB_SILVER).cost; // convert to usd

// Price of metals - calculated
const goldPrice = goldCalculator(locationForGold, purity, weightOfGold).cost; // convert to usd
const silverPrice = silverCalculator(locationForSilver, weightOfSilver).cost; // convert to usd

// To calculate zakat for metals and saving in that location
function zakat(goldPrice1, silverPrice2, priceOfNISABGold3, priceOfNISABSilver4, priceOfNisabSavingsGold5, priceOfNisabSavingsSilver6, savings7)
{
    let totalAboveNisab = 0;

    // Check if metals are above Nisab
    if (goldPrice1 > priceOfNISABGold3 || silverPrice2 > priceOfNISABSilver4)
    {
        totalAboveNisab += goldPrice1 + silverPrice2;
    }

    // Check if savings are above Nisab
    if (savings7 > priceOfNisabSavingsGold5 || savings7 > priceOfNisabSavingsSilver6)
    {
        totalAboveNisab += savings7;
    }

    // If neither metals nor savings are above Nisab, return 0
    if (totalAboveNisab == 0)
    {
        return 0;
    }

    return totalAboveNisab * ZAKAT_RATE;

}

console.log(zakat(goldPrice, silverPrice, priceOfNisabGold, priceOfNisabSilver, priceOfNisabSavingsGold, priceOfNisabSavingsSilver, savings));