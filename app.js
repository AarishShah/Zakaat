// Website-1 we are collecting the data from: https://www.goodreturns.in/gold-rates/united-states.html
// Website-2 (we will implement this later): https://pricegold.net/today/
// Documenttaion for table-scraper: https://www.npmjs.com/package/table-scraper
// reference (ignore): https://www.npmjs.com/package/live-fuel-currency-gold-prices

var scraper = require('table-scraper');
const location = 'united-states'; // user will enter united states, change that ti united-states @KhushbooHamid
const url = `https://www.goodreturns.in/gold-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData)
    {
        // console.log(tableData); // to display entire list of tables
        const weigthofcarat22 = tableData[0][1][0]; // 1 gram gold
        const carat22 = tableData[0][0][1]; // 22 carat gold        
        const stringCostofcarat22 = tableData[0][1][1]; // cost of 1 gram of 22 carat gold

        // applying regex to get the number only
        const stringWithCurrency = stringCostofcarat22;
        const costofcarat22 = parseFloat(stringWithCurrency.replace(/[^0-9.-]+/g, "")); // regex to get the number only

        // applying regex to get the currency symbol only
        const stringWithNumbers = stringCostofcarat22;
        const currencySymbol = stringWithNumbers.replace(/[0-9.,]+/g, "");

        console.log("The cost of " + weigthofcarat22 + " of " + carat22 + " gold is: " + costofcarat22 + " " + currencySymbol);

        /*
        the output will be an array of arrays.'
        next step is to post relevant data only
            relevant data is the first two table on the website 1 (22k and 24k)
        */
    });