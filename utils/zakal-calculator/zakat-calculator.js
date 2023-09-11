const goldCalculator = require('./metal-calculator/gold-calculator');
const silverCalculator = require('./metal-calculator/silver-calculator');
const currencyConverter = require('./metal-calculator/currency-converter');

// Constants
const NISAB_GOLD = 85.0;
const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;

// Fetch details (assuming these are constants for now)
const locationForGold = 'chennai';
const purity = 24;
const weightOfGold = 1000;

const locationForSilver = 'chennai';
const weightOfSilver = 1000;

const savings = 1000;
const savingsLocation = 'chennai';

// Main function
async function calculateZakat() {
    // local currency

    // Nisab for savings
    const one = await goldCalculator(savingsLocation, 24, NISAB_GOLD);
    const two = await silverCalculator(savingsLocation, NISAB_SILVER);

    // Nisab for metals
    const three = await goldCalculator(locationForGold, 24, NISAB_GOLD);
    const four = await silverCalculator(locationForSilver, NISAB_SILVER);

    // Price of metals - calculated
    const five = await goldCalculator(locationForGold, purity, weightOfGold);
    const six = await silverCalculator(locationForSilver, weightOfSilver);

    // to collect local currency (for frontend)
    const seven = one.cost;
    const eight = one.currency;
    const nine = two.cost;
    const ten = two.currency;
    const eleven = three.cost;
    const twelve = three.currency;
    const thirteen = four.cost;
    const fourteen = four.currency;
    const fifteen = five.cost;
    const sixteen = five.currency;
    const seventeen = six.cost;
    const eighteen = six.currency;

    // USD currency
    const priceOfNisabSavingsGold = await currencyConverter(one.cost, one.currency, 'usd');
    const priceOfNisabSavingsSilver = await currencyConverter(two.cost, two.currency, 'usd');
    
    const priceOfNisabGold = await currencyConverter(three.cost, three.currency, 'usd');
    const priceOfNisabSilver = await currencyConverter(four.cost, four.currency, 'usd');
    
    const goldPrice = await currencyConverter(five.cost, five.currency, 'usd');
    const silverPrice = await currencyConverter(six.cost, six.currency, 'usd');

    // Zakat calculation
    const zakatAmount = zakat(goldPrice, silverPrice, priceOfNisabGold, priceOfNisabSilver, priceOfNisabSavingsGold, priceOfNisabSavingsSilver, savings);
    console.log(zakatAmount);
}

// Zakat calculation function remains unchanged
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

calculateZakat();