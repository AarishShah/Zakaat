// Website-1 we are collecting the data from: https://www.goodreturns.in/gold-rates/united-states.html (we will use this for states in india only)
// Website-2 (we will implement this later): https://pricegold.net/today/ (we will use this for countries)
// Documenttaion for table-scraper: https://www.npmjs.com/package/table-scraper
// reference (ignore): https://www.npmjs.com/package/live-fuel-currency-gold-prices

var scraper = require('table-scraper');
const location = 'delhi'; // user will enter united states, change that to united-states @KhushbooHamid
const url = `https://www.goodreturns.in/gold-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData)
    {
         //console.log(tableData); // to display entire list of tables
        console.log(tableData[1][1][0]); //this will give weight
        console.log(tableData[1][1][1]); //this will give price in usd
        console.log(tableData[1][0][1]); //this will give price in usd
        

    });