// https://www.creditmantri.com/gold-rate/ (for indian cities)
// 3630 give nothing, 3629 is the last td
// 726 cities

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

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
    let results = [];

    // for (let index = 0; index < 30; index += 5) // test for small data
    for (let index = 0; index < 3630; index += 5) // 3630
    {

        const city = dataRow.find('td').eq(index).text();
        const rate22K = dataRow.find('td').eq(index + 1).text();
        const rate24K = dataRow.find('td').eq(index + 3).text();

        const goldCost22K = parseFloat(rate22K.replace(/[^0-9.]+/g, ''));
        const goldCost24K = parseFloat(rate24K.replace(/[^0-9.]+/g, ''));

        results.push({ city: city, rate22K: goldCost22K, rate24K: goldCost24K });

    }

    /// below code needs to be replaced. It should be stored in a database
    // Ensure 'data' directory exists or create it
    const dir = './gold/json-data';
    if (!fs.existsSync(dir))
    {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Save the file inside the 'data' directory
    fs.writeFileSync(dir + '/indian-cities-data.json', JSON.stringify(results, null, 2), 'utf-8');

    return results;

}

module.exports = extractData;