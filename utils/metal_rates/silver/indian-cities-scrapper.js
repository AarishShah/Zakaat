// https://www.creditmantri.com/silver-rate/ (for indian cities)
// 1926 give nothing, 1925 is the last td
// 642 cities

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = `https://www.creditmantri.com/silver-rate/`;

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

    // for (let index = 0; index < 10; index += 3) // test for small data
    for (let index = 0; index < 1926; index += 3) // 1926
    {

        const city = dataRow.find('td').eq(index).text();
        const rate = dataRow.find('td').eq(index + 1).text();

        const cost = parseFloat(rate.replace(/[^0-9.]/g, ''));
        results.push({ city: city, rate: cost });

    }

    /// below code needs to be replaced. It should be stored in a database
    // Ensure 'data' directory exists or create it
    const dir = './silver/json-data';
    if (!fs.existsSync(dir))
    {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Save the file inside the 'data' directory
    fs.writeFileSync(dir + '/indian-cities-data.json', JSON.stringify(results, null, 2), 'utf-8');

    return results;

}

module.exports = extractData;