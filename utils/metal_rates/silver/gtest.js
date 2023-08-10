const scraper = require('table-scraper');

/**
 * Extracts silver data from the table provided.
 *
 * @param {Array} tableData - The data fetched from the scraper.
 * @returns {Object} - Extracted silver data.
 */
const extractSilverData = (tableData) =>
{
    const silverData = tableData[0][4];
    const value = Object.entries(silverData);
    const price = value[1][1];
    const currencySymbol = price.replace(/[0-9.,]+/g, '');
    const cost = parseFloat(price.replace(/[^0-9.-]+/g, ''));

    return {
        currencySymbol: currencySymbol,
        cost: cost
    };
}

const khushi = (location) =>
{
    return new Promise((resolve, reject) =>
    {
        const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`;

        scraper.get(url)
            .then(function (tableData)
            {
                const result = extractSilverData(tableData);
                resolve(result);
            })
            .catch(error =>
            {
                console.error("Error fetching silver data:", error);
                reject(error);
            });
    });
}

module.exports = khushi;