var scraper = require('table-scraper');
const location = 'united-states'; // user will enter united states, change that ti united-states @KhushbooHamid
const url = `https://www.goodreturns.in/gold-rates/${location}.html`;

scraper
    .get(url)
    .then(function (tableData)
    {
        console.log(tableData);
    });