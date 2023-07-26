// Data source: https://rates.goldenchennai.com/world/silver-rate/nepal-silver-rate-today/ (we will use this for countries)

var scraper = require('table-scraper');
const location = 'nepal';
const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`;

scraper
    .get(url)
    .then(function (tableData)
    {
        const silverData = tableData[0][4];
        const value = Object.entries(silverData);
        const weight = value[0][1]
        const price = value[1][1];
        const currencySymbol = price.replace(/[0-9.,]+/g, '');
        const cost = parseFloat(price.replace(/[^0-9.-]+/g, ''));

        console.log(weight); // we might need to parse weight as well
        console.log(currencySymbol);
        console.log(cost);
        console.log("\n");

    });