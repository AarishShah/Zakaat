var scraper = require('table-scraper');
const location = 'delhi'; // user will enter united states, change that to united-states @KhushbooHamid
const url = `https://www.goodreturns.in/gold-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData) {
        
        const weightOfCarat24 = tableData[1][1][0];
        const carat24 = tableData[1][0][1];
        const stringCostOfCarat24 = tableData[1][1][1];

        // Extract the number only using regex
        const costOfCarat24 = parseFloat(stringCostOfCarat24.replace(/[^0-9.-]+/g, ''));

        // Extract the currency symbol only using regex
        const currencySymbolCarat24 = stringCostOfCarat24.replace(/[0-9.,]+/g, '');

        console.log(`The cost of ${weightOfCarat24} of ${carat24} gold is: ${costOfCarat24} ${currencySymbolCarat24}`);


    });