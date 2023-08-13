// Data source: https://rates.goldenchennai.com/world/gold-rate/nepal-gold-rate-today/ (we will use this for countries) // scrapping data from this site is allowed

// @KhushbooHamid implemented this code in all 4 files (gold 1, gold 2, silver 1, silver 2)
// axios.get(url,
//     {
//         headers: 
//         {
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//         }
//     })

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
        weight: dataRow.find('td').eq(16).text(),
        rate18K: dataRow.find('td').eq(18).text(),
        rate22K: dataRow.find('td').eq(17).text(),
        rate24K: dataRow.find('td').eq(19).text()
    };

    const goldWeight = parseInt(data.weight.replace(/[^0-9.]+/g, ''));
    const goldCurrencySymbol = data.rate18K.replace(/[0-9.,]+/g, '');
    const goldCost18K = parseFloat(data.rate18K.replace(/[^0-9.]+/g, ''));
    const goldCost22K = parseFloat(data.rate22K.replace(/[^0-9.]+/g, ''));
    const goldCost24K = parseFloat(data.rate24K.replace(/[^0-9.]+/g, ''));

    return {
        goldWeight,
        goldCurrencySymbol,
        goldCost18K,
        goldCost22K,
        goldCost24K
    };
}

module.exports = extractData;
