// Function to calculate Zakat



const getGold_Countries = require('../utils/available_locations/gold/gold-2');
const Gold_Countries = JSON.parse(getGold_Countries());

const getSilver_Countries = require('../utils/available_locations/silver/silver-2');
const Silver_Countries = JSON.parse(getSilver_Countries());

const getIndian_Gold_Cities = require('../utils/available_locations/gold/gold-1');
const Indian_Gold_Cities = JSON.parse(getIndian_Gold_Cities());

const getIndian_Silver_Cities = require('../utils/available_locations/silver/silver-1')
const Indian_Silver_Cities = JSON.parse(getIndian_Silver_Cities());

// Zakat Nisab value for gold and silver (in grams)
const nisabGold = 85.0;
const nisabSilver = 595.0;

// Zakat rate (2.5%)
const zakatRate = 0.025;

let location;
function calculateZakat(gold, silver, otherAssets, savings, liabilities, location)
{

    // Map to store current market prices of gold and silver for different countries (currency per gram)

    let found = false; // this is the flag to check if the country is found

    for (let index = 0; index < 32; index++) // hard coded 32 countries
    {
        const value = Object.entries(Gold_Countries[index]);
        if (location == value[1][1])
        {
            console.log("Zakat can be calculated for " + value[1][1]);
            found = true; // set the flag to true if country is found
            break;
        }
    }

    if (!found) // if country is not found after looping through all countries
    {
        console.log("not found");
    }


    const goldPricesPerGram = {


        // india: 4500.0, // Replace with the actual price of gold for India
        // usa: 40.0,     // Replace with the actual price of gold for USA
        // Add more countries and corresponding prices as needed
    };
    // console.log(goldPricesPerGram["Algeria"]);

    // const goldPricesArray = Object.values(goldPricesPerGram);
    // for (let i = 0; i < goldPricesArray.length; i++)
    // {
    //     console.log(goldPricesArray[i]);
    // console.log(goldPricesArray[0]); // Accessing the first value (Algeria)
    // console.log(goldPricesArray[1]); // Accessing the second value (Australia)
    // // Continue accessing other values using their respective indices

    // for (let i = 0; i < goldPricesArray.length; i++) {
    //     const country = Object.keys(goldPricesPerGram)[i];
    //     const goldPrice = goldPricesArray[i];
    //     console.log(`${country}: ${goldPrice}`);

    const silverPricesPerGram = {
    };
    let flag = false;
    for (let k = 0; k < 56; k++)
    {  //as there are 56 countries in silverdata
        const silverValue = Silver_Countries[k];
        if (location == silverValue)
        {
            console.log("zakat can be calculted for " + silverValue);
            flag = true;
            break;
        }

    }
    if (flag == false)
    {
        console.log("cannot find ");
    }

    //~~~~~~~~~~~~~~~~~~

    let flag1 = false;

    for (let a = 0; a < 105; a++)
    {
        const GoldCites = Indian_Gold_Cities[a];
        if (location == GoldCites)
        {
            console.log("can be calculted");
            flag1 = true;
            break;
        }
    }
    if (flag1 == false)
    {
        console.log("cannot find");
    }
    //~~~~~~~~~~~~~~~~~~~~~~~



    let flag2 = false;

    for (let b = 0; b < 105; b++)
    {
        const silCities = Indian_Silver_Cities[b];
        if (location == silCities)
        {
            console.log("can be calculated");
            flag2 = true;
            break;
        }
    }
    if (flag2 == false)
    {
        console.log("cannot find");
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~

}







// india: 70.0, // Replace with the actual price of silver for India
// usa: 0.8,   // Replace with the actual price of silver for USA
// Add more countries and corresponding prices as needed
// };

// const silverPricesArray = Object.values(silverPricesPerGram);


// for (let i = 0; i < silverPricesArray.length; i++)
// {
//     console.log(silverPricesArray[i]);
// }


// Check if the country is supported and get the corresponding market prices
const goldPricePerGram = goldPricePerGram[location];
const silverPricePerGram = silverPricePerGram[location];

if (!goldPricePerGram || !silverPricePerGram) //data set
{
    console.log("Sorry, Zakat calculation is not supported for your country at the moment.");
    return;
}

// Calculate total assets (including savings)
const totalAssets = gold + silver + otherAssets + savings;

// Deduct liabilities from total assets
const netAssets = totalAssets - liabilities;

// Calculate Zakat on gold and silver separately (in grams)
let zakatOnGoldGrams = 0.0;
let zakatOnSilverGrams = 0.0;

if (gold >= nisabGold)
{
    zakatOnGoldGrams = gold * zakatRate;
}

if (silver >= nisabSilver)
{
    zakatOnSilverGrams = silver * zakatRate;
}

// Convert Zakat from grams to the respective country's currency using the market prices
const zakatOnGoldCurrency = zakatOnGoldGrams * goldPricePerGram;
const zakatOnSilverCurrency = zakatOnSilverGrams * silverPricePerGram;

// Calculate Zakat on savings (2.5% of the total savings)
const zakatOnSavingsCurrency = savings * 0.025;

// Calculate total Zakat in the respective country's currency (after deducting liabilities)
const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;        

if (totalZakatCurrency > 0.0)
{
    console.log(`You must pay Zakat: ${totalZakatCurrency} ${country}`);
} else
{
    console.log("You don't have to pay Zakat");
}


// Example usage
calculateZakat(100, 500, 2000, 3000, 500, "India");

// get data frm g1, g2, s1,s2
// currency
// data set se data collect krna