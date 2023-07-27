// // Data source: https://www.goodreturns.in/silver-rates/ahmedabad.html (we will use this for states in India only)

// var scraper = require('table-scraper');
// const location = 'ahmedabad';
// const url = `https://www.goodreturns.in/silver-rates/${location}.html`;

// scraper
//     .get(url)
//     .then(function (tableData)
//     {
//         const silverData = tableData[0][1];
//         // const weight = parseInt(silverData[0].replace(/[^0-9]+/g, ''));
//         const price = silverData[1];
//         const currencySymbol = price.replace(/[0-9.,]+/g, '');
//         const cost = parseFloat(price.replace(/[^0-9.-]+/g, ''));

//         // console.log(weight); // all values are for 1 gram
//         console.log(currencySymbol);
//         console.log(cost);
//         console.log("\n");

//     });


// Data source: https://www.goodreturns.in/silver-rates/ahmedabad.html (we will use this for states in India only)

var scraper = require('table-scraper');
const location = 'ahmedabad';
const url = `https://www.goodreturns.in/silver-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData)
    {
        const silverData = tableData[0][1];
        // const weight = parseInt(silverData[0].replace(/[^0-9]+/g, ''));
        const price = silverData[1];
        const currencySymbol = price.replace(/[0-9.,]+/g, '');
        const cost = parseFloat(price.replace(/[^0-9.-]+/g, ''));

        // console.log(weight); // all values are for 1 gram
        console.log(currencySymbol);
        console.log(cost);
        console.log("\n");

    });