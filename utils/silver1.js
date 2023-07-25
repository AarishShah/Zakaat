// Data source: https://pricegold.net/today/ (we will use this for countries)
// Documenttaion for table-scraper: https://www.npmjs.com/package/table-scraper

var scraper = require('table-scraper');
const location = 'ahmedabad';
const url = `https://www.goodreturns.in/silver-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData) {
        // console.log(tableData[0]) // first table on the website
        //   const goldData = tableData[0];

        //const sildata=tableData[0][1];
        // const first2 = tableData[0][1].replace(/[^0-9.,]+/g, '');
        // console.log(first2);
        //console.log(tableData[0][1]);
        console.log(tableData[1][1]);//nearest date
        console.log(tableData[2][2]);//highest rate in last month

        // const nearestDate=tableData[1][1];
        // const highestRate=tableData[2][2];


    });