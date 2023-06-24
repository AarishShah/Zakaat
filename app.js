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
        console.log(tableData);
        /*
        the output will be an array of arrays.'
        next step is to post relevant data only
            relevant data is the first two table on the website 1 (22k and 24k)
        */
    });