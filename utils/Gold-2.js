// Website-2 (we will implement this later): https://pricegold.net/today/ (we will use this for countries)

var scraper = require('table-scraper');
const location = 'in-india';
// const url = `https://pricegold.net/${location}/24k-gold/`;
const url = `https://pricegold.net/${location}`; // this should work


scraper
    .get(url)
    .then(function (tableData)
    {
        // console.log(tableData[0]) // first table on the website
        const goldData = tableData[0];

        for (let index = 0; index < 6; index++)
        {
            const value = Object.entries(goldData[index]);

            const currencySymbol = value[1][1].replace(/[0-9.,]+/g, ''); // currency symbol
            const cost = parseFloat(value[1][1].replace(/[^0-9.-]+/g, '')); // cost

            console.log(value[0][1]); // 24k 1Gram
            console.log(currencySymbol);
            console.log(cost);
            console.log("\n");
        }
    });

/*
goldData returns an object.
we convert goldData to an array using Object.entries(goldData) and store it in value.

[
[ 'Gold', '24k 1Gram' ],
[ 'Indian rupee', '₹5,118.20' ],
[ 'In USD', '$61.92' ],
[ "Today's change", '₹0.00' ]
]

Indexing:
[
[ 00, 01 ],
[ 10, 11 ],
[ 20, 21 ],
[ 30, 32 ]
]
*/