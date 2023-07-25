var scraper = require('table-scraper');
const location = 'ahmedabad';
const url = `https://www.goodreturns.in/silver-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData)
    {
        // console.log(tableData[0]) // first table on the website
     //   const goldData = tableData[0];
//console.log(tableData[2][0]);
// console.log(tableData[1][1]);//nearest date
// console.log(tableData[2][2]);//highest rate in last month

const nearestDate=tableData[1][1];
const highestRate=tableData[2][2];


    });
