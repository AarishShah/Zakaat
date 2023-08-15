// Data source: https://rates.goldenchennai.com/world/gold-rate/nepal-gold-rate-today/ (we will use this for countries) // scrapping data from this site is allowed

const goldCountryList = require('../../../available_locations/gold/country-list');
const goldCountryListObj = JSON.parse(goldCountryList())
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
        location = goldCountryListObj[index].replace(/\s/g, '-')
        const url = `https://rates.goldenchennai.com/world/gold-rate/${location}-gold-rate-today/`

        const $ = await fetchData(url);
        const dataRow = $('tr');


        const weight = dataRow.find('td').eq(16).text();
        const rate18K = dataRow.find('td').eq(18).text();
        const rate22K = dataRow.find('td').eq(17).text();
        const rate24K = dataRow.find('td').eq(19).text();

        const country = location.replace(/-/g, ' ');
        const goldCurrencySymbol = rate18K.replace(/[0-9.,]+/g, '');
        const goldCost18K = parseFloat(rate18K.replace(/[^0-9.]+/g, ''));
        const goldCost22K = parseFloat(rate22K.replace(/[^0-9.]+/g, ''));
        const goldCost24K = parseFloat(rate24K.replace(/[^0-9.]+/g, ''));

        results.push({ country: country, currency: goldCurrencySymbol, rate18K: goldCost18K, rate22K: goldCost22K, rate24K: goldCost24K });

    }

    const dir = './gold/json-data';
    if (!fs.existsSync(dir))
    {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dir + '/world-data.json', JSON.stringify(results, null, 2), 'utf-8');

    return results;
}
module.exports = extractData;