const goldCalculator = require('./metal-calculator/gold-calculator');
console.log(goldCalculator('chennai', 22, 10)); // the parameters of goldCalculator are location, purity, weight

const silverCalculator = require('./metal-calculator/silver-calculator');
// console.log(silverCalculator('YEmen', 10)); // the parameters of silverCalculator are location, weight

// const NISAB_GOLD = 85.0;
// const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;

const price_NISABgold=goldCalculator('chennai', 24, NISAB_GOLD);
const price_NISABsilver=silverCalculator('Yemen', NISAB_SILVER);



const locationForGold = 'chennai';
const purity = 22;
const weightOfGold = 10;
const locationForSilver = 'Yemen';
const weightOfSilver = 20;
const savings = 0;


const goldPrice = goldCalculator(locationForGold, purity, weightOfGold); // calculates the price of gold
const silverPrice = silverCalculator(locationForSilver, weightOfSilver); // calculates the price of silver

function getZakatInGrams(goldPrice, silverPrice,price_NISABgold, price_NISABsilver)
{
    if (goldPrice > price_NISABgold || silverPrice > price_NISABsilver)
    {
        return (goldPrice+silverPrice) * ZAKAT_RATE;
    }
    return 0;
}

{


    const goldNisab = ZAKAT_RATE * goldPrice;
    const silverNisab = ZAKAT_RATE * silverPrice;
    const honey = ZAKAT_RATE * savings;

    const totalWealth = goldNisab + silverNisab + honey;

    // is the totalWealth greater than NISAB_GOLD or NISAB_SILVER, then zakat is applicable else not
    if (totalWealth < NISAB_GOLD || totalWealth < NISAB_SILVER)
    {
        return "You don't need to pay zakat";
    }
    else
    {
        const zakatAmount = totalWealth * ZAKAT_RATE;
        return zakatAmount;
    }
}

// console.log(zakat('chennai', 22, 10, 'Yemen', 20, 0)); // the parameters of zakat are location, purity, weightOfGold, weightOfSilver, savings