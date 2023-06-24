// Website-1 we are collecting the data from: https://www.goodreturns.in/gold-rates/united-states.html (we will use this for states in india only)
// Website-2 (we will implement this later): https://pricegold.net/today/ (we will use this for countries)
// Documenttaion for table-scraper: https://www.npmjs.com/package/table-scraper
// reference (ignore): https://www.npmjs.com/package/live-fuel-currency-gold-prices

var scraper = require('table-scraper');
const location = 'united-states'; // user will enter united states, change that to united-states @KhushbooHamid
const url = `https://www.goodreturns.in/gold-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData)
    {
        // console.log(tableData); // to display entire list of tables
        const weightOfCarat22 = tableData[0][1][0]; // 1 gram gold
        const carat22 = tableData[0][0][1]; // 22 carat gold
        const stringCostOfCarat22 = tableData[0][1][1]; // cost of 1 gram of 22 carat gold
      
        // Extract the number only using regex
        const costOfCarat22 = parseFloat(stringCostOfCarat22.replace(/[^0-9.-]+/g, ''));
      
        // Extract the currency symbol only using regex
        const currencySymbolCarat22 = stringCostOfCarat22.replace(/[0-9.,]+/g, '');
      
        console.log(`The cost of ${weightOfCarat22} of ${carat22} gold is: ${costOfCarat22} ${currencySymbolCarat22}`);

        /*
        the output will be an array of arrays.'
        next step is to post relevant data only
            relevant data is the first two table on the website 1 (22k and 24k)
        */
    });