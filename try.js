// Website-2 (we will implement this later): https://pricegold.net/today/ (we will use this for countries)

var scraper = require('table-scraper');
const location =  'in-india';
// const url = `https://pricegold.net/${location}/24k-gold/`;
const url = `https://pricegold.net/${location}`; // this should work


scraper
    .get(url)
    .then(function (tableData)
    {
        // console.log(tableData[0]) // firsd table on the website
        const goldData = tableData[0]; 
        // console.log(goldData[0])// 24k 1Gram
       
        const happy = Object.entries(goldData[0]); // is used to convert the object data into an array of its key-value pairs
        const gold = happy[0][0]; // Gold a: as we only want for Gold
        const Carat22 = happy[0][1].replace(' 1Gram', '');// 24k
        
        
     //   const weightOfCarat22 = happy[0][1].split(' ')[1];// 1gram
       const weightOfCarat22 = happy[0][1].replace('24k','') //1 gram 
        
      //const costOfCarat22= parseFloat(happy[1][1].replace(/[^0-9.]+/g, '')); //cost
const costOfCarat22= happy[1][1].replace(/[^0-9.]+/g, '');
const currencySymbolCarat22 = happy[1][0].replace(/[^A-Za-z]+/g, '')// currency symbol

//const locationName = location.split('-').join('-');
console.log(` the cost of ${weightOfCarat22} of ${Carat22}  ${gold} is ${costOfCarat22 } ${currencySymbolCarat22}  `)




           console.log(goldData[0])       
        // console.log(goldData[1])// 22k 1Gram
        // console.log(goldData[2])// 21k 1Gram
        // console.log(goldData[3])// 18k 1Gram
        // console.log(goldData[4])// 14k 1Gram
        // console.log(goldData[5])// 10k 1Gram

        /*
        Create const for each of the above
        use regex to extract the number and currency symbol
        log the output in the following format: The cost of 24k 1Gram of gold is: 61.98 $ , in us-united-states
        do not delete the comments. Write your code from line 28 or below.
        */

    });

/*
Output:

{
Gold: '24k 1Gram',
'United States dollar': '$61.98',
"Today's change": '$0.07'        
}
{
Gold: '22k 1Gram',
'United States dollar': '$56.81',
"Today's change": '$0.06'
}
{
Gold: '21k 1Gram',
'United States dollar': '$54.23',
"Today's change": '$0.06'
}
{
Gold: '18k 1Gram',
'United States dollar': '$46.48',
"Today's change": '$0.05'
}
{
Gold: '14k 1Gram',
'United States dollar': '$36.15',
"Today's change": '$0.04'
}
{
Gold: '10k 1Gram',
'United States dollar': '$25.82',
"Today's change": '$0.03'
}
*/
