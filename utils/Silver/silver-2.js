// Data source: https://rates.goldenchennai.com/world/silver-rate/nepal-silver-rate-today/ (we will use this for countries)

// var scraper = require('table-scraper');
// const location = 'nepal';
// const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`;

// scraper
//     .get(url)
//     .then(function (tableData)
//     {
//         const silverData = tableData[0][4];
//         const value = Object.entries(silverData);
//         // const weight = parseInt(value[0][1].replace(/[^0-9]+/g, ''))
//         const price = value[1][1];
//         const currencySymbol = price.replace(/[0-9.,]+/g, '');
//         const cost = parseFloat(price.replace(/[^0-9.-]+/g, ''));

//         // console.log(weight); // all values are for 1 gram
//         console.log(currencySymbol);
//         console.log(cost);
//         console.log("\n");

//     });


const scraper = require('table-scraper');

// Export the function to get silver rates for a specific location
module.exports.getSilverRates = function (location) {
  const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`;

  return scraper.get(url).then(function (tableData) {
    const silverData = tableData[0][4];
    const value = Object.entries(silverData);
    const price = value[1][1];
    const currencySymbol = price.replace(/[0-9.,]+/g, '');
    const cost = parseFloat(price.replace(/[^0-9.-]+/g, ''));

    const silverRate = {
      currencySymbol: currencySymbol,
      cost: cost,
    };

    return silverRate;
  });
};
