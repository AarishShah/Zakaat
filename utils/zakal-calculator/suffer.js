const goldCalculator = require('./metal-calculator/gold-calculator');
// // console.log(goldCalculator('chennai', 22, 10)); // the parameters of goldCalculator are location, purity, weight

const silverCalculator = require('./metal-calculator/silver-calculator');
// // console.log(silverCalculator('YEmen', 10)); // the parameters of silverCalculator are location, weight

const NISAB_GOLD = 85.0;
const NISAB_SILVER = 595.0;
const ZAKAT_RATE = 0.025;
//nisaab value in monetary form
const price_NISABgold=goldCalculator('chennai', 24, NISAB_GOLD);
const price_NISABsilver=silverCalculator('Yemen', NISAB_SILVER);
// console.log(price_NISABgold);
// console.log(price_NISABsilver);


const locationForGold = 'chennai';
const purity = 22;
const weightOfGold = 1000;
const locationForSilver = 'chennai';
const weightOfSilver = 20000;
const savings = 2000;


const goldPrice = goldCalculator(locationForGold, purity, weightOfGold); // calculates the price of gold user has got(weight entered by user * price of gold in that location)
const silverPrice = silverCalculator(locationForSilver, weightOfSilver); // calculates the price of silver

// function getZakat(goldPrice, silverPrice,price_NISABgold, price_NISABsilver)
// {
//     if (goldPrice > price_NISABgold || silverPrice > price_NISABsilver)
//     {
//         return (goldPrice+silverPrice) * ZAKAT_RATE;
//     }
//     return 0;
// }
// console.log(getZakat(goldPrice, silverPrice,price_NISABgold, price_NISABsilver));


if (goldPrice > price_NISABgold || silverPrice > price_NISABsilver)
{
    console.log((goldPrice+silverPrice) * ZAKAT_RATE);
}
// {


    // const goldZakat = ZAKAT_RATE * goldPrice;//zakat user has to pay
    // const silverZakat = ZAKAT_RATE * silverPrice;
    // const savingsZakat = ZAKAT_RATE * savings;

    // const totalWealth = goldZakat + silverZakat + savingsZakat;

   


//     // is the totalWealth greater than NISAB_GOLD or NISAB_SILVER, then zakat is applicable else not
//     if (totalWealth < NISAB_GOLD || totalWealth < NISAB_SILVER)
//     {
//         return "You don't need to pay zakat";
//     }
//     else
//     {
//         const zakatAmount = totalWealth * ZAKAT_RATE;
//         return zakatAmount;
//     }
// }

// // console.log(zakat('chennai', 22, 10, 'Yemen', 20, 0)); // the parameters of zakat are location, purity, weightOfGold, weightOfSilver, savings