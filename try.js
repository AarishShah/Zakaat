// Website-2 (we will implement this later): https://pricegold.net/today/ (we will use this for countries)

var scraper = require('table-scraper');
const location = 'us-united-states';
// const url = `https://pricegold.net/${location}/24k-gold/`;
const url = `https://pricegold.net/${location}`; // this should work


scraper
    .get(url)
    .then(function (tableData)
    {
       //  console.log(tableData);
    //    console.log(tableData[0]) // firsd table on the website
        console.log(tableData[0][0])//kilo ounce and gram price
         console.log(tableData[0][1])//kilo ounce and gram price
         console.log(tableData[0][2])//kilo ounce and gram price
         console.log(tableData[0][3])//kilo ounce and gram price
         console.log(tableData[0][4])//kilo ounce and gram price
         console.log(tableData[0][5])//kilo ounce and gram price


       // console.log(tableData[2][0])//gold price in the selected country

//         const weightOfCarat24Gm=tableData[0][0];
//         const weightOfCarat24Ounce=tableData[0][1];
//         const weightOfCarat24Kg=tableData[0][2];
//         const priceInCountry=tableData[2][0];


//  console.log(`The cost of ${weightOfCarat24Gm} gm, ${weightOfCarat24Ounce} ounce and ${weightOfCarat24Kg}  kg gold is ${priceInCountry}`);
   });
