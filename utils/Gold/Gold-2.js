// Data source: https://pricegold.net/today/ (we will use this for countries)
// Documenttaion for table-scraper: https://www.npmjs.com/package/table-scraper

// var scraper = require('table-scraper');
// const location = 'in-india';
// const url = `https://pricegold.net/${location}`;

// scraper

//     .get(url)
//     .then(function (tableData)
//     {
//         // console.log(tableData[0]) // first table on the website
//         const goldData = tableData[0];

//         for (let index = 0; index < 6; index++)
//         {
//             const value = Object.entries(goldData[index]);

//             const purity = parseInt(value[0][1].replace(/k.*/, ''));
//             const currencySymbol = value[1][1].replace(/[0-9.,]+/g, ''); // currency symbol
//             const cost = parseFloat(value[1][1].replace(/[^0-9.-]+/g, '')); // cost

//             console.log("Purity: " + purity); // all values are for 1 gram
//             console.log(currencySymbol);
//             console.log(cost);
//             console.log("\n");
//         }
//     });

const scraper = require('table-scraper');

// Export the function to get gold rates for a specific location
module.exports.getGoldRates = function (location) {
  const url = `https://pricegold.net/${location}`;

  return scraper.get(url).then(function (tableData) {
    const goldRates = [];

    const goldData = tableData[0];

    for (let index = 0; index < 6; index++) {
      const value = Object.entries(goldData[index]);

      const purity = parseInt(value[0][1].replace(/k.*/, ''));
      const currencySymbol = value[1][1].replace(/[0-9.,]+/g, '');
      const cost = parseFloat(value[1][1].replace(/[^0-9.-]+/g, ''));

      const goldRate = {
        purity: purity,
        currencySymbol: currencySymbol,
        cost: cost,
      };

      goldRates.push(goldRate);
    }

    return goldRates;
  });
};
