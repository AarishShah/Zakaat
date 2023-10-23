// Data source: https://rates.goldenchennai.com/world/silver-rate/nepal-silver-rate-today/ (we will use this for countries) // scrapping data from this site is allowed

const silverCountryList = require('../../../available_locations/silver/country-list');
const silverCountryListObj = JSON.parse(silverCountryList())
// const fs = require('fs');
const Silver = require('../../../../models/Silver');

const axios = require('axios');
const cheerio = require('cheerio');

async function fetchData(url)
{
    try
    {
        const result = await axios.get(url);
        return cheerio.load(result.data);
    } catch (error)
    {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}

async function extractData()
{
    let location = "";
    let results = [];

    for (let index = 0; index < 2; index++) // test for small data
    // for (let index = 0; index < 57; index++)
    {
        location = silverCountryListObj[index].replace(/\s/g, '-')
        const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`

        const $ = await fetchData(url);
        if (!$) continue;

        const dataRow = $('tr');
        const rate = dataRow.find('td').eq(9).text();
        const country = location.replace(/-/g, ' ');
        const silverCurrencySymbol = rate.replace(/[0-9.,]+/g, '');
        const silverCost = parseFloat(rate.replace(/[^0-9.]+/g, ''));

        console.log('hiii');
        results.push({ country: country, currency: silverCurrencySymbol, rate: silverCost });
        try
        {
            const silverData = new Silver(
                {
                    country: country,
                    currency: silverCurrencySymbol,
                    rate: silverCost,
                }
            );
            await silverData.save();
            results.push(silverData);
            console.log('hi ', silverData);
        } catch (error)
        {
            console.error(`Error saving data for ${country}:`, error);
        }
    }

    console.log('Data extraction and saving to database completed.');
    return results;
}
module.exports = extractData;