// Function to calculate Zakat



const getGold_Countries = require('../utils/available_locations/gold/gold-2');
const Gold_Countries = JSON.parse(getGold_Countries());

const getSilver_Countries = require('../utils/available_locations/silver/silver-2');
const Silver_Countries = JSON.parse(getSilver_Countries());


function calculateZakat(gold, silver, otherAssets, savings, liabilities, country) {
    // Zakat Nisab value for gold and silver (in grams)
    const nisabGold = 85.0;
    const nisabSilver = 595.0;

    // Zakat rate (2.5%)
    const zakatRate = 0.025;
    // Map to store current market prices of gold and silver for different countries (currency per gram)
   
    // const country_data = value[1][1];
    // const newcountry = country.toLowerCase();

    for (let index = 0; index < 15; index++) {
        
        const value = Object.entries(Gold_Countries[index]);
        // console.log(country+" "+value[1][1]);
        if (country == value[1][1]) {
            console.log(value[1][1]);
        }
        else {
            console.log("not found");
        }//fix using flag
    }

    const goldPricesPerGram = {

        // check country  -> dataset


        // Algeria: Gold_Countries[0],
        // Australia: Gold_Countries[1],
        // Bahrain: Gold_Countries[2],
        // Canada: Gold_Countries[3],
        // China: Gold_Countries[4],
        // Brazil: Gold_Countries[5],
        // Egypt: Gold_Countries[6],
        // Europe: Gold_Countries[7],
        // Ghana: Gold_Countries[8],
        // India: Gold_Countries[9],
        // Indonesia: Gold_Countries[10],
        // Iran: Gold_Countries[11],
        // Iraq: Gold_Countries[12],
        // Jordan: Gold_Countries[13],
        // Kuwait: Gold_Countries[14],
        // Lebanon: Gold_Countries[15],
        // Libya: Gold_Countries[16],
        // Morocco: Gold_Countries[17],
        // Oman: Gold_Countries[18],
        // Mexico: Gold_Countries[19],
        // Pakistan: Gold_Countries[20],
        // Qatar: Gold_Countries[21],
        // Russia: Gold_Countries[22],
        // "Saudi Arabia": Gold_Countries[23],
        // Singapore: Gold_Countries[24],
        // "South Africa": Gold_Countries[25],
        // "South Korea": Gold_Countries[26],
        // Turkey: Gold_Countries[27],
        // "United Arab Emirates": Gold_Countries[28],
        // " United States": Gold_Countries[29],
        // "United Kingdom": Gold_Countries[30],
        // Uzbekistan: Gold_Countries[31],
        // Yemen: Gold_Countries[32]

        // india: 4500.0, // Replace with the actual price of gold for India
        // usa: 40.0,     // Replace with the actual price of gold for USA
        // Add more countries and corresponding prices as needed
    };
    // console.log(goldPricesPerGram["Algeria"]);

    const goldPricesArray = Object.values(goldPricesPerGram);
    for (let i = 0; i < goldPricesArray.length; i++) {
        console.log(goldPricesArray[i]);
        // console.log(goldPricesArray[0]); // Accessing the first value (Algeria)
        // console.log(goldPricesArray[1]); // Accessing the second value (Australia)
        // // Continue accessing other values using their respective indices

        // for (let i = 0; i < goldPricesArray.length; i++) {
        //     const country = Object.keys(goldPricesPerGram)[i];
        //     const goldPrice = goldPricesArray[i];
        //     console.log(`${country}: ${goldPrice}`);
    }



    const silverPricesPerGram = {


        // "Afghanistan": Silver_Countries[0],
        // "Algeria": Silver_Countries[1],
        // "Argentina": Silver_Countries[2],
        // "Australia": Silver_Countries[3],
        // "Austria": Silver_Countries[4],
        // "Bangladesh": Silver_Countries[5],
        // "Belgium": Silver_Countries[6],
        // "Bhutan": Silver_Countries[7],
        // "Brazil": Silver_Countries[8],
        // "Canada": Silver_Countries[9],
        // "Chile": Silver_Countries[10],
        // "China": Silver_Countries[11],
        // "Cuba": Silver_Countries[12],
        // "Denmark": Silver_Countries[13],
        // "Egypt": Silver_Countries[14],
        // "Finland": Silver_Countries[15],
        // "France": Silver_Countries[16],
        // "Germany": Silver_Countries[17],
        // "Greece": Silver_Countries[18],
        // "Hong Kong": Silver_Countries[19],
        // "Hungary": Silver_Countries[20],
        // "Indonesia": Silver_Countries[21],
        // "Iran": Silver_Countries[22],
        // "Ireland": Silver_Countries[23],
        // "Israel": Silver_Countries[24],
        // "Italy": Silver_Countries[25],
        // "Japan": Silver_Countries[26],
        // "Jordan": Silver_Countries[27],
        // "Maldives": Silver_Countries[28],
        // "Mauritius": Silver_Countries[29],
        // "Mexico": Silver_Countries[30],
        // "Morocco": Silver_Countries[31],
        // "Myanmar": Silver_Countries[32],
        // "Nepal": Silver_Countries[33],
        // "Netherlands": Silver_Countries[34],
        // "New Zealand": Silver_Countries[35],
        // "Nigeria": Silver_Countries[36],
        // "Norway": Silver_Countries[37],
        // "Pakistan": Silver_Countries[38],
        // "Philippines": Silver_Countries[39],
        // "Poland": Silver_Countries[40],
        // "Portugal": Silver_Countries[41],
        // "Romania": Silver_Countries[42],
        // "Russia": Silver_Countries[43],
        // "South Africa": Silver_Countries[44],
        // "South Korea": Silver_Countries[45],
        // "Spain": Silver_Countries[46],
        // "Sri Lanka": Silver_Countries[47],
        // "Sweden": Silver_Countries[48],
        // "Switzerland": Silver_Countries[49],
        // "Syria": Silver_Countries[50],
        // "Thailand": Silver_Countries[51],
        // "Turkey": Silver_Countries[52],
        // "UK": Silver_Countries[53],
        // "USA": Silver_Countries[54],
        // "Vietnam": Silver_Countries[55],
        // "Yemen": Silver_Countries[56]







        // india: 70.0, // Replace with the actual price of silver for India
        // usa: 0.8,   // Replace with the actual price of silver for USA
        // Add more countries and corresponding prices as needed
    };

    const silverPricesArray = Object.values(silverPricesPerGram);

    for (let i = 0; i < silverPricesArray.length; i++) {
        console.log(silverPricesArray[i]);
    }


    // Check if the country is supported and get the corresponding market prices
    const goldPricePerGram = goldPricesPerGram[country];
    const silverPricePerGram = silverPricesPerGram[country];

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

    if (gold >= nisabGold) {
        zakatOnGoldGrams = gold * zakatRate;
    }

    if (silver >= nisabSilver) {
        zakatOnSilverGrams = silver * zakatRate;
    }

    // Convert Zakat from grams to the respective country's currency using the market prices
    const zakatOnGoldCurrency = zakatOnGoldGrams * goldPricePerGram;
    const zakatOnSilverCurrency = zakatOnSilverGrams * silverPricePerGram;

    // Calculate Zakat on savings (2.5% of the total savings)
    const zakatOnSavingsCurrency = savings * 0.025;

    // Calculate total Zakat in the respective country's currency (after deducting liabilities)
    const totalZakatCurrency = zakatOnGoldCurrency + zakatOnSilverCurrency + zakatOnSavingsCurrency;

    if (totalZakatCurrency > 0.0) {
        console.log(`You must pay Zakat: ${totalZakatCurrency} ${country}`);
    } else {
        console.log("You don't have to pay Zakat");
    }
}

// Example usage
calculateZakat(100, 500, 2000, 3000, 500, "India");

// get data frm g1, g2, s1,s2
// currency
// data set se data collect krna