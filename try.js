// Website-2 (we will implement this later): https://pricegold.net/today/ (we will use this for countries)

var scraper = require('table-scraper');
const location = 'us-united-states';
const url = `https://pricegold.net/${location}/24k-gold/`;


scraper
    .get(url)
    .then(function (tableData)
    {
        console.log(tableData[0][0])//kilo ounce and gram price
        console.log(tableData[0][1])//kilo ounce and gram price
        console.log(tableData[0][2])//kilo ounce and gram price


        console.log(tableData[2][0])//gold price in the selected country

        // const weightOfCarat24=tableData[0];
        // const priceInCountry=tableData[2][0];

    });
