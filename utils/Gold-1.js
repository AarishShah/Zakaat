// Data source: https://www.goodreturns.in/gold-rates/united-states.html (we will use this for states in India only)
// Documenttaion for table-scraper: https://www.npmjs.com/package/table-scraper
// reference (ignore): https://www.npmjs.com/package/live-fuel-currency-gold-prices

var scraper = require('table-scraper');
const location = 'united-states'; // user will enter 'united states', change that to 'united-states' for the url
const url = `https://www.goodreturns.in/gold-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData)
    {
        for (let index = 0; index < 2; index++)
        {
            goldData = tableData[index]; // first ittion: 22 karat gold, second ittion: 24 karat gold
            const weight = goldData[1][0]; // 1 gram gold
            const purity = goldData[0][1]; // 22/24 karat gold
            const currencySymbol = goldData[1][1].replace(/[0-9.,]+/g, ''); // Extracts the currency symbol only using regex
            const cost = parseFloat(goldData[1][1].replace(/[^0-9.-]+/g, '')); // Extracts the number only using regex

            console.log(weight);
            console.log(purity);
            console.log(currencySymbol);
            console.log(cost);
            console.log("\n");
        }
    });
    // test