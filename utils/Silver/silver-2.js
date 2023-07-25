// Data source: https://rates.goldenchennai.com/world/silver-rate/nepal-silver-rate-today/ (we will use this for countries)

var scraper = require('table-scraper');
const location = 'nepal';
const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`;

scraper
    .get(url)
    .then(function (tableData)
    {
        const silverData = tableData[0][4];
        console.log(silverData);

        console.log(typeof (silverData)); // @KhushbooHamid - This should give you a hint.

    });