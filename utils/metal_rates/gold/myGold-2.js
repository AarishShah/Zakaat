// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = `https://goldprice.org/`;

// axios.get(url)
//     .then(response => {
//         const responseData = response.data;
//         const $ = cheerio.load(responseData);

//         // Now you can use selectors to target specific elements on the page and extract their data
//         // const goldPrice = $('#price').text(); // Example selector, replace with actual selector
//         console.log(responseData);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
//`````````````````````````````````````````````````````````````````````````


const axios = require('axios');
const cheerio = require('cheerio');
const location = 'india'
const url = `https://goldprice.org/gold-price-${location}.html`;

// axios.get(url)
axios.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
})
    .then(response => {
        const responseData = response.data;
        console.log(responseData);
    })