// Data source: https://rates.goldenchennai.com/world/silver-rate/nepal-silver-rate-today/ (we will use this for countries) // scrapping data from this site is allowed

const silverCountryList = require('../../../available_locations/silver/country-list');
const silverCountryListObj = JSON.parse(silverCountryList())
const fs = require('fs');

const axios = require('axios');
const cheerio = require('cheerio');

async function fetchData(url)
{
    const result = await axios.get(url);
    return cheerio.load(result.data);
}

async function extractData()
{
    let location = "";
    let results = [];

    // for (let index = 0; index < 2; index++) // test for small data
    for (let index = 0; index < 57; index++)
    {
        location = silverCountryListObj[index].replace(/\s/g, '-')
        const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`

        const $ = await fetchData(url);
        const dataRow = $('tr');

        const rate = dataRow.find('td').eq(9).text();

        const country = location.replace(/-/g, ' ');
        const silverCurrencySymbol = rate.replace(/[0-9.,]+/g, '');
        const silverCost = parseFloat(rate.replace(/[^0-9.]+/g, ''));

        results.push({ country: country, currency: silverCurrencySymbol, rate: silverCost });

    }

    const dir = './silver/json-data';
    if (!fs.existsSync(dir))
    {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dir + '/world-data.json', JSON.stringify(results, null, 2), 'utf-8');

    return results;
}
module.exports = extractData;