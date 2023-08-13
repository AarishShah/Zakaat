const goldCountry  = require('./gold/world-scrapper.js');

async function gold2()
{
    const location = 'nepal';
    const url = `https://rates.goldenchennai.com/world/gold-rate/${location}-gold-rate-today/`;
    const data = await goldCountry(url);
    console.log(data);
}

const silverCountry = require('./silver/silver-country-scrapper.js');

async function silver2()
{
    const location = 'nepal';
    const url = `https://rates.goldenchennai.com/world/silver-rate/${location}-silver-rate-today/`;
    const data = await silverCountry(url);
    console.log(data);
}


gold2();
silver2();

// @KhushbooHamid --- make the call asynchronous (line 22 and 23)