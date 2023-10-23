// https://www.creditmantri.com/gold-rate/ (for indian cities)
// 3630 give nothing, 3629 is the last td
// 726 cities

const GoldCity = require('../../../../models/metal_rates/gold/gold_cities');
const axios = require('axios');
const cheerio = require('cheerio');
// const fs = require('fs');

const url = `https://www.creditmantri.com/gold-rate/`;

async function fetchData(url)
{
    const result = await axios.get(url);
    return cheerio.load(result.data);
}

async function extractData(url)
{
    const $ = await fetchData(url);
    const dataRow = $('tr');
    // let results = [];

    for (let index = 0; index < 30; index += 5) // test for small data
    // for (let index = 0; index < 3630; index += 5) // 3630
    {

        const city = dataRow.find('td').eq(index).text();
        const rate22K = dataRow.find('td').eq(index + 1).text();
        const rate24K = dataRow.find('td').eq(index + 3).text();

        const goldCost22K = parseFloat(rate22K.replace(/[^0-9.]+/g, ''));
        const goldCost24K = parseFloat(rate24K.replace(/[^0-9.]+/g, ''));

        // results.push({ city: city, rate22K: goldCost22K, rate24K: goldCost24K });
        try
        {
            await GoldCity.findOneAndUpdate({ city }, { rate22K: goldCost22K, rate24K: goldCost24K }, { upsert: true, new: true });
            console.log(`Data saved for city: ${city}`);
        } catch (error)
        {
            console.error(`Error saving data for city ${city}:`, error);
        }
    }
    console.log('Data extraction and saving to database completed.');
}

module.exports = extractData;