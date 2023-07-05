// Website-2 (we will implement this later): https://pricegold.net/today/ (we will use this for countries)

var scraper = require('table-scraper');
const location = 'us-united-states';
// const url = `https://pricegold.net/${location}/24k-gold/`;
const url = `https://pricegold.net/${location}`; // this should work


scraper
    .get(url)
    .then(function (tableData)
    {
        // console.log(tableData[0]) // firsd table on the website
        const goldData = tableData[0];
        console.log(goldData[0])// 24k 1Gram
        console.log(goldData[1])// 22k 1Gram
        console.log(goldData[2])// 21k 1Gram
        console.log(goldData[3])// 18k 1Gram
        console.log(goldData[4])// 14k 1Gram
        console.log(goldData[5])// 10k 1Gram




        //  console.log(`The cost of ${weightOfCarat24Gm} gm, ${weightOfCarat24Ounce} ounce and ${weightOfCarat24Kg}  kg gold is ${priceInCountry}`);
    });
