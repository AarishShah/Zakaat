const axios = require('axios');
const cheerio = require('cheerio'); 

const url = `https://www.creditmantri.com/silver-rate/`;

axios.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
})
.then(response => {
    const responseData = response.data;
    const $ = cheerio.load(responseData);

    // Find all the tables, you can modify the selector to be more specific if needed
    $('table').each((tableIndex, table) => {
        console.log(`Table ${tableIndex + 1}:`);
        $(table).find('tr').each((i, row) => {
            const cells = [];
            $(row).find('td').each((j, cell) => {
                cells.push($(cell).text().trim());
            });
            console.log(`Row ${i + 1}:`, cells.join(', '));
        });
    });
})
.catch(error => {
    console.error(`Error fetching the URL: ${error.message}`);
});
