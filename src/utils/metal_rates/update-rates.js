require('../../db/mongoose') // to connect mongose to the database

const goldCities = require('./gold/scrapper/indian-cities.js');
async function gold1()
{
    const url = `https://www.creditmantri.com/gold-rate/`;
    const data = await goldCities(url);
    console.log(data);
}

const goldCountry = require('./gold/scrapper/countries.js');
async function gold2()
{
    const data = await goldCountry();
    console.log(data);
}

const silverCities = require('./silver/scrapper/indian-cities.js');
async function silver1()
{
    const url = `https://www.creditmantri.com/silver-rate/`;
    const data = await silverCities(url);
    console.log(data);
}

const silverCountry = require('./silver/scrapper/countries.js');
async function silver2()
{
    const data = await silverCountry();
    console.log(data);
}

gold1(); // this function excutes in 243 seconds, don't run it unless necessary
// gold2();
// silver1(); // this function also takes a lot of time, don't run it unless necessary
// silver2(); // this function takes arounnd 1 min.

// @KhushbooHamid --- make the call asynchronous (line 35 to 38)
// before implementing this code in zakat_calculator, we need to optimised it (this code would work either way but at the cost of time)