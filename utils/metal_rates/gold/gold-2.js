// Data source: https://rates.goldenchennai.com/world/gold-rate/nepal-gold-rate-today/ (we will use this for countries) // scrapping data from this site is allowed

var scraper = require('table-scraper');
const location = 'afghanistan';
const url = `https://rates.goldenchennai.com/world/gold-rate/${location}-gold-rate-today/`;

scraper
    .get(url)
    .then(function (tableData)
    {
        const goldData = tableData[0];
        // console.log(goldData);

        for (let index = 1; index < 4; index++)
        {
            const value = Object.entries(goldData[4]);

            const weight = parseInt(value[0][1].replace(/[^0-9]+/g, ''))
            const purity = parseInt(value[index][0].replace(/[^0-9]+/g, ''))
            const currencySymbol = value[index][1].replace(/[0-9.,]+/g, '');
            const cost = parseFloat(value[index][1].replace(/[^0-9.-]+/g, ''));

            console.log(weight); // all values are for 1 gram
            console.log(purity);
            console.log(currencySymbol);
            console.log(cost);
            console.log("\n");
        }

        // save the result in a file

    });