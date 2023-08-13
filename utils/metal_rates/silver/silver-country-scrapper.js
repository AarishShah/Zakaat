// Data source: https://rates.goldenchennai.com/world/silver-rate/nepal-silver-rate-today/ (we will use this for countries) // scrapping data from this site is allowed

const axios = require('axios');
const cheerio = require('cheerio');

async function fetchData(url)
{
    const result = await axios.get(url);
    return cheerio.load(result.data); 
}

async function extractData(url)
{
    const $ = await fetchData(url);
    const dataRow = $('tr');

    const data =
    {
        weight: dataRow.find('td').eq(8).text(),
        rate18K: dataRow.find('td').eq(9).text()
    };

    const silverWeight = parseInt(data.weight.replace(/[^0-9.]+/g, ''));
    const silverCurrencySymbol = data.rate18K.replace(/[0-9.,]+/g, '');
    const silverCost = parseFloat(data.rate18K.replace(/[^0-9.]+/g, ''));

    return {
        silverWeight,
        silverCurrencySymbol,
        silverCost
    };
}
module.exports = extractData;