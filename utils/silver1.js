// Data source: https://www.goodreturns.in/silver-rates/ahmedabad.html (we will use this for states in India only)

var scraper = require('table-scraper');
const location = 'ahmedabad';
const url = `https://www.goodreturns.in/silver-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData) {
        
        const silverData = tableData[0][1];
        const weight = silverData[0];
        const value = silverData[1];
        const currencySymbol = value.replace(/[0-9.,]+/g, '');
        const cost = value.replace(/[^0-9.-]+/g, '')

        console.log(weight);
        console.log(currencySymbol);
        console.log(cost);
        console.log("\n");

    });